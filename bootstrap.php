<?php 

use Dotenv\Dotenv;

// Load all classes.
require __DIR__ . '/vendor/autoload.php';

// Get constants.
require __DIR__ . '/config/constants.php';

// Load environment variables.
Dotenv::createImmutable(__DIR__)->load();

// Get and return the DI Container.
$container = require CONF_PATH . '/container/builder.php';

return $container;