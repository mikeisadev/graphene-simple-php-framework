<?php

namespace App\Middlewares;

use App\Config;
use Slim\Views\Twig;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class UtilsMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly ResponseFactoryInterface $response,
        private readonly Twig $twig,
        private readonly Config $config
    ) {}

    public function process(Request $request, Handler $handler): Response {

        $this->twig->getEnvironment()->addGlobal(
            'utils',
            [
                'url' => $this->config->get('app_url')
            ]
        );

        return $handler->handle($request);

    }

}