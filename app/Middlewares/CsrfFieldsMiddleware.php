<?php

namespace App\Middlewares;

use Slim\Views\Twig;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class CsrfFieldsMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly Twig $twig,
        private readonly ContainerInterface $container
    ) {}

    public function process(Request $request, Handler $handler): Response {
        $csrf = $this->container->get('csrf');

        // CSRF token name and value
        $csrfNameKey = $csrf->getTokenNameKey();
        $csrfValueKey = $csrf->getTokenValueKey();
        $csrfName = $csrf->getTokenName();
        $csrfValue = $csrf->getTokenValue();

        $csrf = [
            'fields' => "<input type='hidden' name='{$csrfNameKey}' value='{$csrfName}'>
            <input type='hidden' name='{$csrfValueKey}' value='{$csrfValue}'>",
            'keys' => [
                'name'  => $csrfNameKey,
                'value' => $csrfValueKey
            ],
            'name'  => $csrfName,
            'value' => $csrfValue
        ];

        $this->twig->getEnvironment()->addGlobal('csrf', $csrf);

        $response = $handler->handle($request);

        return $response;

    }

}