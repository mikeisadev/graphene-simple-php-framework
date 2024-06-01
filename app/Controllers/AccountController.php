<?php 

namespace App\Controllers;

use Slim\Views\Twig;
use App\Entities\User;
use App\Interfaces\AuthInterface;
use App\Validators\ValidatorFactory;
use App\Interfaces\HashServiceInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Validators\UpdateAccountValidator;
use App\Validators\UpdatePasswordValidator;
use App\Interfaces\UserServiceProviderInterface;
use App\Interfaces\EntityManagerServiceInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class AccountController {

    public function __construct(
        private readonly Twig $twig,
        private readonly AuthInterface $auth,
        private readonly ValidatorFactory $validator,
        private readonly UserServiceProviderInterface $userProvider,
        private readonly EntityManagerServiceInterface $entityManager,
        private readonly HashServiceInterface $hashService
    ) {}

    public function accountView(Request $request, Response $response): Response {
        return $this->twig->render(
            $response, 
            'account/account.twig',
        );
    }

    public function dashboardAccountView(Request $request, Response $response): Response {

        return $this->twig->render($response, 'account/dashboard-account.twig');
    }

    public function editAccountView(Request $request, Response $response): Response {

        return $this->twig->render($response, 'account/edit-account.twig');
    }

    /**
     * Update account.
     */
    public function editAccount(Request $request, Response $response): Response {
        $data = $request->getParsedBody();

        $user = $request->getAttribute('user');

        // Update user data
        if ( array_key_exists('update-user', $data) ) {
            $data = $this->validator->make(UpdateAccountValidator::class)->validate($data);

            $user->setFirstName( $data['fname'] );
            $user->setLastName( $data['lname'] );
            $user->setEmail( $data['email'] );
            $user->setUsername( $data['username'] );

            $this->entityManager->save($user);
            
            return $response->withHeader('Location', (string) $request->getUri())->withStatus(302);
        }
        
        // Update user password.
        if ( array_key_exists('update-password', $data) ) {
            $data = $this->validator->make(UpdatePasswordValidator::class)->validate($data);

            $user->setPassword( $this->hashService->hashPassword( $data['npassword'] ) );

            $this->entityManager->save($user);

            $this->auth->logOut();

            return $response->withHeader('Location', '/login')->withStatus(302);
        }
    }

}