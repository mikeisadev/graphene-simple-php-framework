<?php

namespace App\Services;

use App\Entities\User;
use App\Interfaces\UserInterface;
use Doctrine\ORM\Query\Parameter;
use App\DataObjects\RegisterUserData;
use App\Interfaces\HashServiceInterface;
use App\Interfaces\UserLoginServiceInterface;
use App\Interfaces\UserServiceProviderInterface;
use Doctrine\Common\Collections\ArrayCollection;
use App\Interfaces\EntityManagerServiceInterface;

class UserServiceProvider implements UserServiceProviderInterface {

    public function __construct(
        private readonly EntityManagerServiceInterface $entityManager,
        private readonly HashServiceInterface $hashService,
        private readonly UserLoginServiceInterface $userLoginService
    ) {}

    public function findUserById(int $userId): ?UserInterface {
        return $this->entityManager->find(User::class, ['id' => $userId]);
    }

    public function createUser(RegisterUserData $userData) {
        $user = new User();

        $user->setFirstName( $userData->fname );
        $user->setLastName( $userData->lname );
        $user->setUsername( $userData->username );
        $user->setEmail( $userData->email );
        $user->setPassword( $this->hashService->hashPassword( $userData->password ) );

        $this->entityManager->save( $user );
    }

    /**
     * Find user by username or email.
     */
    public function findUserByCredentials(string $credential): ?UserInterface {
        $loginType = $this->userLoginService->isUsernameOrEmail($credential);
        
        $user = $this->entityManager->getRepository(User::class)->findOneBy([
            $loginType => $credential
        ]);

        return $user;
    }

    /**
     * Check if username exists.
     */
    public function usernameExists(string $username): bool {
        $query = $this->entityManager
                    ->getRepository(User::class)
                    ->createQueryBuilder('u')
                    ->select('u')
                    ->where('u.username = :username')
                    ->setParameter('username', $username)
                    ->getQuery()
                    ->getArrayResult();

        return (bool) $query;
    }
    
    /**
     * Check if email exists.
     */
    public function emailExists(string $email): bool {
        $query = $this->entityManager
                    ->getRepository(User::class)
                    ->createQueryBuilder('u')
                    ->select('u')
                    ->where('u.email = :email')
                    ->setParameter('email', $email)
                    ->getQuery()
                    ->getArrayResult();
        
        return (bool) $query;
    }

    /**
     * Check if username exists except the one of the passed user id.
     */
    public function usernameExistsExCurr(string $username, int|string $currUserId): bool {
        $query = $this->entityManager
                    ->getRepository(User::class)
                    ->createQueryBuilder('u')
                    ->select('u')
                    ->where('u.username = :username AND u.id != :userid')
                    ->setParameters(new ArrayCollection([
                        new Parameter('username', $username),
                        new Parameter('userid', $currUserId)
                    ]))
                    ->getQuery()
                    ->getArrayResult();

        return (bool) $query;
    }

    /**
     * Check if email exists except the one of the passed user id.
     */
    public function emailExistsExCurr(string $email, int|string $currUserId): bool {
        $query = $this->entityManager
                    ->getRepository(User::class)
                    ->createQueryBuilder('u')
                    ->select('u')
                    ->where('u.email = :email AND u.id != :userid')
                    ->setParameters(new ArrayCollection([
                        new Parameter('email', $email),
                        new Parameter('userid', $currUserId)
                    ]))
                    ->getQuery()
                    ->getArrayResult();

        return (bool) $query;
    }
    
}