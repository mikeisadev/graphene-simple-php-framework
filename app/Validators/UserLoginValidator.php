<?php

namespace App\Validators;

use App\Entities\User;
use Valitron\Validator;
use App\Interfaces\AuthInterface;
use App\Interfaces\ValidatorInterface;
use App\Exceptions\ValidationException;
use Doctrine\ORM\EntityManagerInterface;
use App\Interfaces\UserLoginServiceInterface;
use App\Interfaces\UserServiceProviderInterface;

class UserLoginValidator implements ValidatorInterface {

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserLoginServiceInterface $loginService,
        private readonly UserServiceProviderInterface $userService,
        private readonly AuthInterface $auth
    ) {}

    public function validate(array $data): array {
        $v = new Validator($data);
        
        $v->rule(
            'required', 
            ['login', 'password']
        )->message('{field} is required');
            
        $loginType = $this->loginService->isUsernameOrEmail($data['login']);

        if ($loginType === 'email') {
            $v->rule(
                'email',
                'login'
            )->message('Invalid email!');

            $v->rule(
                fn($field, $value, $params, $fields) => $this->entityManager->getRepository(User::class)->count(
                    ['email' => $value]
                ),
                'login'
            )->message('The email you provided is not registered!');
        }

        if ($loginType === 'username') {
            $v->rule(
                fn($field, $value, $params, $fields) => $this->entityManager->getRepository(User::class)->count(
                    ['username' => $value]
                ),
                'login'
            )->message('The username you provided is not registered!');
        }
        
        $this->doValidation($v);

        $user = $this->userService->findUserByCredentials($data['login']);

        if (!is_null($user)) {
            $v->rule(
                fn($field, $value, $params, $fields) => $this->auth->verifyPassword($value, $user),
                'password'
            )->message('The password is not correct!');
        } else {
            $v->error('login', 'User not found');
        }

        $v->labels([
            'login' => 'Your username or password',
        ]);

        $this->doValidation($v);

        return $data;
    }

    private function doValidation(Validator $v) {
        if (!$v->validate()) {
            throw new ValidationException($v->errors());
        }
    }
}