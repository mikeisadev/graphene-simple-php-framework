<?php

namespace App\Middlewares;

use App\Config;

use App\Interfaces\SessionInterface;
use Psr\Http\Server\MiddlewareInterface;
use App\Interfaces\RequestServiceInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class SessionMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly SessionInterface $session,
        private readonly Config $config,
        private readonly RequestServiceInterface $requestService
    ) {}

    public function process(Request $request, Handler $handler): Response {

        $this->session->start();

        $method = strtolower( $request->getMethod() );

        if ($method === 'get') {
            $this->session->set('previousUrl', (string) $request->getUri());
        }

        return $handler->handle($request);

    }

}