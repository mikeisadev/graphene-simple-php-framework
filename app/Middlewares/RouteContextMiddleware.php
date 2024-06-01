<?php

namespace App\Middlewares;

use Slim\Views\Twig;
use Slim\Routing\RouteContext;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class RouteContextMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly ResponseFactoryInterface $response,
        private readonly Twig $twig
    ) {}

    public function process(Request $request, Handler $handler): Response {
        $route = RouteContext::fromRequest($request);

        $this->twig->getEnvironment()->addGlobal(
            'route', 
            $route->getRoute()->getName()
        );

        return $handler->handle($request);

    }

}