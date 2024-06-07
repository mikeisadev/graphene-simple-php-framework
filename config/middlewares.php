<?php

use Slim\App;
use App\Config;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;
use App\Middlewares\UtilsMiddleware;
use App\Middlewares\SessionMiddleware;
use App\Middlewares\CsrfFieldsMiddleware;
use App\Middlewares\OldFormDataMiddleware;
use App\Middlewares\RouteContextMiddleware;
use Slim\Middleware\MethodOverrideMiddleware;
use App\Middlewares\ValidationErrorsMiddleware;
use App\Middlewares\ValidationExceptionMiddleware;

return function (App $app) {
    $container = $app->getContainer();
    $config = $container->get(Config::class);

    $app->add(UtilsMiddleware::class);
    
    $app->add(MethodOverrideMiddleware::class);
    $app->add(CsrfFieldsMiddleware::class);
    $app->add('csrf');
    
    $app->add(TwigMiddleware::create($app, $container->get(Twig::class)));

    $app->add(ValidationExceptionMiddleware::class);
    $app->add(ValidationErrorsMiddleware::class);
    $app->add(OldFormDataMiddleware::class);
    
    $app->add(SessionMiddleware::class);

    $app->add(RouteContextMiddleware::class);
    $app->addRoutingMiddleware();

    $app->addBodyParsingMiddleware();

    $app->addErrorMiddleware(
        $config->get('slim.display_error_details'), 
        $config->get('slim.log_errors'), 
        $config->get('slim.log_error_details')
    );
};