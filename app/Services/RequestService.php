<?php

namespace App\Services;

use App\Interfaces\RequestServiceInterface;
use Psr\Http\Message\ServerRequestInterface;

class RequestService implements RequestServiceInterface {

    /**
     * Check if a given request is coming from an asyncronous javascript call.
     */
    public function isXhr(ServerRequestInterface $request): bool {
        return in_array( 
            strtolower( $request->getHeaderLine('X-Requested-With') ), 
            ['xhr', 'xmlhttprequest'] 
        );
    }

}