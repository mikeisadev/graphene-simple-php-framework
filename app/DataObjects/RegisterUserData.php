<?php

namespace App\DataObjects;

class RegisterUserData {

    public function __construct(
        public readonly string $fname,
        public readonly string $lname,
        public readonly string $username,
        public readonly string $email,
        public readonly string $password
    ) {}

}