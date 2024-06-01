<?php

namespace App\Interfaces;

interface HashServiceInterface {

    public function hashPassword(string $password): string;

}