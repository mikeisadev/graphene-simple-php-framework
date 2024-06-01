<?php

namespace App\Interfaces;

use App\Interfaces\UserInterface;
use App\DataObjects\LoginUserData;

interface AuthInterface {
    
    public function user(): ?UserInterface;

    public function login(LoginUserData $userData);

    public function isLoggedIn(): bool;

    public function logOut(): void;

    public function verifyPassword(string $password, UserInterface $user): bool;

}