<?php

namespace Database\Seeders;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Persistence\ObjectManager;
use App\Entities\User;
use Faker\Factory;

class UserSeeder implements FixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 20; $i++) {
            $fname = $faker->firstName();
            $lname = $faker->lastName();
            $username = strtolower( $faker->username );
            $email = strtolower( $faker->email );
            $password = $faker->password;

            $user = new User();
            $user->setFirstName( $fname );
            $user->setLastName( $lname );
            $user->setUsername( $username );
            $user->setEmail( $email );
            $user->setPassword( password_hash($password, PASSWORD_BCRYPT) );
    
            $manager->persist($user);

            echo 'User created. ' . PHP_EOL;
            echo 'Username: ' . $username . ', Email: ' . $email . ', Password: ' . $password . PHP_EOL;
        }

        $manager->flush();
    }
}