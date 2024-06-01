<?php

namespace App\Middlewares;

use Slim\Views\Twig;
use App\Interfaces\SessionInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class ValidationErrorsMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly ResponseFactoryInterface $response,
        private readonly SessionInterface $session,
        private readonly Twig $twig
    ) {}

    public function process(Request $request, Handler $handler): Response {

        if ( $this->session->hasFlash('errors') ) {

            $this->twig->getEnvironment()->addGlobal('errors', $this->session->getFlash('errors'));

        }

        return $handler->handle($request);

    }

}