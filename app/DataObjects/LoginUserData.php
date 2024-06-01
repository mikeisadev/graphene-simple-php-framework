<?php

namespace App\DataObjects;

class LoginUserData {

    public function __construct(
        public readonly string $login,
        public readonly string $password
    ) {}

}