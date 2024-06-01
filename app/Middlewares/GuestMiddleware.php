<?php

namespace App\Middlewares;

use App\FormatResponse;
use App\Interfaces\AuthInterface;
use Psr\Http\Server\MiddlewareInterface;
use App\Interfaces\RequestServiceInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class GuestMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly AuthInterface $auth,
        private readonly ResponseFactoryInterface $response,
        private readonly RequestServiceInterface $requestService,
        private readonly FormatResponse $formatResponse
    ) {}

    public function process(Request $request, Handler $handler): Response {
        if ( !$this->auth->isLoggedIn() ) {
            $response = $handler->handle($request);
    
            return $response;
        }

        return $this->response->createResponse(302)->withHeader('Location', '/account');
    }

}