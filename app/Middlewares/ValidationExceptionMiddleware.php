<?php

namespace App\Middlewares;

use Slim\Views\Twig;
use App\FormatResponse;
use App\Interfaces\SessionInterface;
use App\Exceptions\ValidationException;
use Psr\Http\Server\MiddlewareInterface;
use App\Interfaces\RequestServiceInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

final class ValidationExceptionMiddleware implements MiddlewareInterface {
    
    public function __construct(
        private readonly ResponseFactoryInterface $response,
        private readonly SessionInterface $session,
        private readonly RequestServiceInterface $requestService,
        private readonly FormatResponse $formatResponse
    ) {}

    public function process(Request $request, Handler $handler): Response {

        try {
            return $handler->handle($request);
        } catch (ValidationException $e) {
            $response = $this->response->createResponse();

            $old = $request->getParsedBody();

            if ( $this->requestService->isXhr($request) ) {
                return $this->formatResponse->json($response->withStatus(422), $e->errors);
            }

            // Remove secret credentials.
            unset(
                $old['password'],
                $old['rpassword']
            );

            $this->session->setFlash('errors', $e->errors);
            $this->session->setFlash('old', $old);

            return $response
                ->withHeader('Location', (string) $request->getUri())
                ->withStatus(302);
        }

    }

}