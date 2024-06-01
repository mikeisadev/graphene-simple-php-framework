<?php

namespace App\Services;

use App\Interfaces\HashServiceInterface;

class HashService implements HashServiceInterface {

    public function hashPassword(string $password): string {
        return password_hash( $password, PASSWORD_BCRYPT, ['cost' => 12] );
    }

}