<?php

namespace App\Validators;

use App\Entities\User;
use Valitron\Validator;
use App\Interfaces\AuthInterface;
use App\Interfaces\ValidatorInterface;
use App\Exceptions\ValidationException;
use Doctrine\ORM\EntityManagerInterface;
use App\Interfaces\UserServiceProviderInterface;

class UpdateAccountValidator implements ValidatorInterface {

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserServiceProviderInterface $userProvider,
        private readonly AuthInterface $auth
    ) {}

    public function validate(array $data): array {
        $v = new Validator($data);
        $user = $this->auth->user();
        
        $v->rule(
            'required', 
            ['fname', 'lname', 'username', 'email']
        )->message('You can\'t leave {field} blank');

        /**
         * Check if this username already exists.
         */
        $v->rule(
            function($field, $value, $params, $fields) use ($user) { 
                return !$this->userProvider->usernameExistsExCurr(
                    $value,
                    $user->getId()
                );
            },
            'username'
        )->message('This username already exists! Try another.');

        /**
         * Check if this email already exists.
         */
        $v->rule(
            function($field, $value, $params, $fields) use ($user) { 
                return !$this->userProvider->emailExistsExCurr(
                    $value,
                    $user->getId()
                );
            },
            'email'
        )->message('This email already exists! Try another.');

        $v->labels([
            'fname'     => 'first name',
            'lname'     => 'last name',
            'email'     => 'email',
            'username'  => 'username'
        ]);

        if (!$v->validate()) {
            throw new ValidationException($v->errors());
        }

        return $data;
    }
}