<?php

namespace App\Exceptions;

use Throwable;
use RuntimeException;

class ValidationException extends RuntimeException {

    public function __construct(
        public readonly array $errors,
        string $message = 'Validation error(s)',
        int $code = 422,
        ?Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }

}