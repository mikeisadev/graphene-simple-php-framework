<?php

namespace App\Interfaces;

interface EntityManagerServiceInterface {

    public function __call(string $name, array $arguments);

    public function save($entity);

}