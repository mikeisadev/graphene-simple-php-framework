<?php

namespace App\DataObjects;

class SessionConfig {

    public function __construct(
        public readonly int $lifetime,
        public readonly bool $secure,
        public readonly bool $httpOnly,
        public readonly string $sameSite,
        public readonly string $flashName,
        public readonly bool $logoutOnClose
    ) {}

}