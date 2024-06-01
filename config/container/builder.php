<?php

use DI\ContainerBuilder;

// Get container dependencies (bindings), build the container and return it.
return (new ContainerBuilder())
    ->addDefinitions(__DIR__ . '/bindings.php')
    ->build();