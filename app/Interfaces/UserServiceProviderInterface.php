<?php

namespace App\Interfaces;

use App\Interfaces\UserInterface;
use App\DataObjects\RegisterUserData;

interface UserServiceProviderInterface {

    public function findUserById(int $userId): ?UserInterface;

    public function findUserByCredentials(string $credential): ?UserInterface;

    public function createUser(RegisterUserData $userData);

}