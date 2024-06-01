<?php

namespace App\Middlewares;

use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class <className> implements MiddlewareInterface {
    
    public function __construct(
        private readonly ResponseFactoryInterface $response
    ) {}

    public function process(Request $request, Handler $handler): Response {

        $response = $handler->handle($request);

        return $response;

    }

}