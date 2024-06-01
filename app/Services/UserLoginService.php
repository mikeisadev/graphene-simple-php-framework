<?php

namespace App\Services;

use App\Enums\UserLoginTypes;
use App\Interfaces\UserLoginServiceInterface;

class UserLoginService implements UserLoginServiceInterface {

    /**
     * Check if user login credentials is email or username.
     */
    public function isUsernameOrEmail(string $userLogin): string {

        if ( filter_var($userLogin, FILTER_VALIDATE_EMAIL) ) {
            return UserLoginTypes::IS_EMAIL->value;
        }

        return UserLoginTypes::IS_USERNAME->value;

    }

}