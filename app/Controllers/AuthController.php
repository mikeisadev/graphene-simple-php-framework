<?php 

namespace App\Controllers;

use Slim\Views\Twig;
use App\FormatResponse;
use App\Interfaces\AuthInterface;
use Symfony\Component\Mime\Email;
use App\DataObjects\LoginUserData;
use App\Validators\ValidatorFactory;
use App\DataObjects\RegisterUserData;
use App\Validators\UserLoginValidator;
use App\Exceptions\ValidationException;
use Symfony\Component\Mailer\Transport;
use App\Validators\UserRegisterValidator;
use App\Interfaces\RequestServiceInterface;
use Symfony\Component\Mailer\MailerInterface;
use App\Interfaces\UserServiceProviderInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class AuthController {

    public function __construct(
        private readonly Twig $twig,
        private readonly UserServiceProviderInterface $userProvider,
        private readonly AuthInterface $auth,
        private readonly ValidatorFactory $validator,
        private readonly MailerInterface $mailer,
        private readonly FormatResponse $formatResponse,
        private readonly RequestServiceInterface $requestService
    ) {}

    public function loginView(Request $request, Response $response): Response {
        
        return $this->twig->render(
            $response,
            'auth/login.twig'
        );
    }

    public function registerView(Request $request, Response $response): Response {
        return $this->twig->render(
            $response,
            'auth/register.twig'
        );
    }

    public function loginUser(Request $request, Response $response): Response {
        $data = $this->validator->make(UserLoginValidator::class)->validate(
            $request->getParsedBody()
        );

        $res = $this->auth->logIn(new LoginUserData( 
            $data['login'], 
            $data['password'] 
        ));

        return $response->withHeader('Location', '/account')->withStatus(302);
    }

    public function registerUser(Request $request, Response $response): Response {
        $data = $this->validator->make(UserRegisterValidator::class)->validate(
            $request->getParsedBody()
        );

        $this->auth->register( new RegisterUserData(
            $data['fname'],
            $data['lname'],
            $data['username'],
            $data['email'],
            $data['password']
        ) );

        $mail = (new Email())
            ->from('grapheneframework@gmail.com')
            ->to($data['email'])
            ->subject('Welcome')
            ->text('Hello world!');

        $this->mailer->send($mail);
        
        return $response->withHeader('Location', '/login')->withStatus(302);
    }

    public function logOut(Request $request, Response $response): Response {
        $this->auth->logOut();

        return $response->withHeader('Location', '/login')->withStatus(302);
    }

    /**
     * Asynchronous javascript test endpoints.
     */
    public function axiosGetTest(Request $request, Response $response): Response {
        return $this->formatResponse->json(
            $response,
            ['Axios', 'GET', 'test', 'from', 'route']
        );
    }

    public function axiosPostTest(Request $request, Response $response): Response {
        return $this->formatResponse->json(
            $response,
            ['Axios', 'POST', 'test', 'from', 'route']
        );
    }

}