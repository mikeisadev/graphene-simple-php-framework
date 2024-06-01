<?php

namespace App\Enums;

enum UserLoginTypes: string {
    case IS_EMAIL = "email";
    case IS_USERNAME = "username";
}