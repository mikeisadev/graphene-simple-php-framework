<?php

namespace App;

use Closure;
use App\FormatResponse;
use App\Interfaces\RequestServiceInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as Handler;

class Csrf {

    public function __construct(
        private readonly ResponseFactoryInterface $response,
        private readonly RequestServiceInterface $responseService,
        private readonly FormatResponse $formatResponse
    ) {}

    public function handleFailure(): Closure {

        return function(Request $request, Handler $handler) {
            if ($this->responseService->isXhr($request)) {
                $this->responseFactory->createResponse()->withStatus(403);
            }

            // Classic response to NON XHR requests
            return $this->response
                    ->createResponse(302)
                    ->withHeader('Location', (string) $request->getUri());
        };

    }

}