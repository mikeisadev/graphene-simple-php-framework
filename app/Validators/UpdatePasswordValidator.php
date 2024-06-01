<?php

namespace App\Validators;

use App\Entities\User;
use Valitron\Validator;
use App\Interfaces\AuthInterface;
use App\Interfaces\ValidatorInterface;
use App\Exceptions\ValidationException;
use Doctrine\ORM\EntityManagerInterface;

class UpdatePasswordValidator implements ValidatorInterface {

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly AuthInterface $auth
    ) {}

    public function validate(array $data): array {
        $v = new Validator($data);

        $user = $this->auth->user();
        
        $v->rule(
            'required', 
            ['oldpassword', 'npassword', 'nrpassword']
        )->message('{field}');

        // Verify the old password.
        if (!empty($data['oldpassword'])) {
            $v->rule(
                function($field, $value, $params, $fields) use ($user) { 
                    return $this->auth->verifyPassword($value, $user);
                },
                'oldpassword'
            )->message('The password you inserted is not correct.');
        }

        $v->rule('equals', 'nrpassword', 'npassword')->message('The passwords must be the same');

        $v->labels([
            'oldpassword'   => 'You must insert your old password',
            'npassword'     => 'You must insert a new password',
            'nrpassword'    => 'You must confirm the new password'
        ]);

        if (!$v->validate()) {
            throw new ValidationException($v->errors());
        }

        return $data;
    }
}