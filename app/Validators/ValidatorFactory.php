<?php 

namespace App\Validators;

use Exception;
use Psr\Container\ContainerInterface;
use App\Interfaces\ValidatorInterface;
use App\Interfaces\ValidatorFactoryInterface;

class ValidatorFactory implements ValidatorFactoryInterface {

    public function __construct(
        private readonly ContainerInterface $container
    ) {}

    public function make(string $class): ValidatorInterface {
        if ( !class_exists($class) ) {
            throw new Exception('The validator class ('. $class .') does not exist!');
        }
        
        $validator = $this->container->get($class);

        if (! ($validator instanceof ValidatorInterface)) {
            throw new Exception('The class given ('. $class .') is not a validator class!');
        }

        return $validator;
    }

}