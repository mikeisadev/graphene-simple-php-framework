<?php

namespace App\Interfaces;

use App\Interfaces\ValidatorInterface;

interface ValidatorFactoryInterface {

    public function make(string $validatorClass): ValidatorInterface;

}