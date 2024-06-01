<?php 

namespace App\Controllers;

use Slim\Views\Twig;
use App\Entities\User;
use League\Flysystem\Filesystem;
use App\Interfaces\UserInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Interfaces\QueryBuilderServiceInterface;
use App\Interfaces\EntityManagerServiceInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class HomeController {

    public function __construct(
        private readonly Twig $twig,
        private readonly QueryBuilderServiceInterface $query,
        private readonly Filesystem $fs
    ) {}

    public function homeView(Request $request, Response $response): Response {

        return $this->twig->render(
            $response,
            'home.twig'
        );

    }

}