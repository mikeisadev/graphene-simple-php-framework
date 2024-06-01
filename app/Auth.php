<?php

namespace App;

use App\Interfaces\AuthInterface;
use App\Interfaces\UserInterface;
use App\DataObjects\LoginUserData;
use App\Interfaces\SessionInterface;
use App\DataObjects\RegisterUserData;
use App\Interfaces\UserServiceProviderInterface;

class Auth implements AuthInterface {

    
    public function __construct(
        private readonly UserServiceProviderInterface $userService,
        private readonly SessionInterface $session,
        private ?UserInterface $user = null
    ) {}

    /**
     * Get the user.
     */
    public function user(): ?UserInterface {
        if ( !is_null($this->user) ) {
            return $this->user;
        }

        $userId = $this->session->get('user_id');

        if (!$userId) {
            return null;
        }

        $user = $this->userService->findUserById($userId);

        if (is_null($user)) {
            return null;
        }

        $this->user = $user;

        return $this->user;
    }

    /**
     * Register the user.
     */
    public function register(RegisterUserData $userData) {
        $this->userService->createUser( $userData );
    }

    /**
     * Check if the user is logged in.
     */
    public function isLoggedIn(): bool {
        if ( is_null($this->user()) ) {
            return false;
        }
        
        return true;
    }

    /**
     * Log in the user.
     */
    public function logIn(LoginUserData $userData) {
        // If is already logged in, stop.
        if ( $this->isLoggedIn() ) {
            return "Already logged in!";
        }

        $login = $userData->login;
        $password = $userData->password;

        // Find user by credentials
        $user = $this->userService->findUserByCredentials($login);

        // User can be null.
        if ( is_null($user) ) {
            // return null;
            return "User not found";
        }

        // Check password.
        if ( !$this->verifyPassword($password, $user) ) {
            return "Invalid password!";
        }

        // Regenerate user session, put user id in session.
        $this->session->regenerate();
        $this->session->set('user_id', $user->getId());

        $this->user = $user;

        return 'logged in';
    }

    /**
     * Log out the user.
     */
    public function logOut(): void {
        $this->session->unset('user_id');
        $this->session->regenerate();
        $this->user = null;
    }

    /**
     * Verify user password.
     */
    public function verifyPassword(string $password, UserInterface $user): bool {
        return password_verify($password, $user->getPassword());
    }

}