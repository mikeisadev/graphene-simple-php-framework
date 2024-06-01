<?php

namespace App\Middlewares;

use Slim\Views\Twig;
use App\Interfaces\AuthInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class AuthMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly AuthInterface $auth,
        private readonly ResponseFactoryInterface $response,
        private readonly Twig $twig,
    ) {}

    public function process(Request $request, Handler $handler): Response {

        // Check if user is logged in.
        if ($this->auth->isLoggedIn()) {

            $user = $this->auth->user();

            $this->twig->getEnvironment()->addGlobal(
                'user', 
                [
                    'fname'     => $user->getFirstName(),
                    'lname'     => $user->getLastName(),
                    'id'        => $user->getId(),
                    'email'     => $user->getEmail(),
                    'username'  => $user->getUsername()
                ]
            );

            return $handler->handle(
                $request->withAttribute('user', $user)
            );

        }

        return $this->response->createResponse(302)->withHeader('Location', '/login');
    }

}