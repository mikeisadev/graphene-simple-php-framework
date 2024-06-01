<?php

namespace App\Validators;

use App\Entities\User;
use Valitron\Validator;
use App\Interfaces\ValidatorInterface;
use App\Exceptions\ValidationException;
use Doctrine\ORM\EntityManagerInterface;

class UserRegisterValidator implements ValidatorInterface {

    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {}

    public function validate(array $data): array {
        $v = new Validator($data);
        
        $v->rule(
            'required', 
            ['fname', 'lname', 'username', 'email', 'password', 'rpassword']
        )->message('{field} is required');

        $v->rule('email', 'email');

        $v->rule(
            fn($field, $value, $params, $fields) => !$this->entityManager->getRepository(User::class)->count(['email' => $value]),
            'email'
        )->message('An user with this email already exists');

        $v->rule(
            fn($field, $value, $params, $fields) => !$this->entityManager->getRepository(User::class)->count(['username' => $value]),
            'username'
        )->message('This username already exists');

        $v->rule('equals', 'password', 'rpassword')->message('Password and password repeat must be the same');

        $v->labels([
            'fname' => 'First name',
            'lname' => 'Last name',
            'rpassword' => 'Repeat password'
        ]);

        if (!$v->validate()) {
            throw new ValidationException($v->errors());
        }

        return $data;
    }
}