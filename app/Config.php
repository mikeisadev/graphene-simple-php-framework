<?php

namespace App;

class Config {

    public function __construct( 
        private readonly array $config 
    ) {}

    public function get(string $option): mixed {

        $keys = explode('.', $option);
        $value = $this->config;

        foreach ($keys as $key) {
            $value = $value[$key];
        }

        return $value;

    }

}