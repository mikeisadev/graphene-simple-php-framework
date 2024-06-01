<?php

namespace App\Interfaces;

use Psr\Http\Message\ServerRequestInterface;

interface RequestServiceInterface {

    public function isXhr(ServerRequestInterface $request): bool;

}