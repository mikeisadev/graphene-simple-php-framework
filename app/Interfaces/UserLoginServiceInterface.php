<?php

namespace App\Interfaces;

interface UserLoginServiceInterface {

    public function isUsernameOrEmail(string $userLogin): string;

}