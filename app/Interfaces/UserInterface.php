<?php

namespace App\Interfaces;

interface UserInterface {

    public function getId(): int;

    public function getUsername(): string;

    public function getFirstName(): string;

    public function getLastName(): string;

    public function getEmail(): string;

    public function getPassword(): string;

}