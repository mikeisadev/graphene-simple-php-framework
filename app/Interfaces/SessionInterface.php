<?php

namespace App\Interfaces;

interface SessionInterface {

    public function start(): void;

    public function save(): void;

    public function isActive(): bool;

    public function regenerate(): bool;

    public function destroy(): bool;

    public function set(string $key, mixed $value): void;

    public function get(string $key): mixed;

    public function unset(string $key): void;

    public function has(string $key): bool;

    public function setflash(string $key, array $messages): void;

    public function getFlash(string $key): ?array;

    public function hasFlash(string $key): bool;

}