<?php

use Slim\App;
use App\Controllers\AuthController;

/**
 * Controllers.
 */
use App\Controllers\HomeController;
use App\Middlewares\AuthMiddleware;
use App\Middlewares\GuestMiddleware;
use Slim\Routing\RouteCollectorProxy;
use App\Controllers\AccountController;

return function (App $app) {
    $app->group('', function (RouteCollectorProxy $group) {
        $group->get('/', [HomeController::class, 'homeView'])->setName('home');

        $group->get('/login', [AuthController::class, 'loginView'])->setName('login');
        $group->get('/register', [AuthController::class, 'registerView'])->setName('register');

        $group->post('/login', [AuthController::class, 'loginUser']);
        $group->post('/register', [AuthController::class, 'registerUser']);

        $group->get('/axios-get', [AuthController::class, 'axiosGetTest']);
        $group->post('/axios-post', [AuthController::class, 'axiosPostTest']);
    })->add(GuestMiddleware::class);

    $app->group('', function (RouteCollectorProxy $group) {
        $group->group('/account', function (RouteCollectorProxy $account) {
            $account->get('', [AccountController::class, 'accountView'])->setName('dashboard');
            $account->get('/edit', [AccountController::class, 'editAccountView'])->setName('edit_account');

            $account->post('/edit', [AccountController::class, 'editAccount']);
        });

        $group->post('/logout', [AuthController::class, 'logOut']);
    })->add(AuthMiddleware::class);
};