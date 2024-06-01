<?php 

namespace App\Controllers;

use Slim\Views\Twig;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class <className> {

    public function __construct(
        private readonly Twig $twig
    ) {}

    public function controllerMethod(Request $request, Response $response): Response {
        // This is an example method.
        $response->getBody()->write('Hello world');

        return $response;
    }

}