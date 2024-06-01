<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;
use App\Interfaces\UserInterface;

#[ORM\Entity]
#[ORM\Table(name: 'users')]
class User implements UserInterface {

    #[ORM\Id, ORM\Column(options: ['unsigned' => true]), ORM\GeneratedValue]
    private int $id;

    #[ORM\Column(type: 'string')]
    private string $fname;
    
    #[ORM\Column(type: 'string')]
    private string $lname;
    
    #[ORM\Column(type: 'string')]
    private string $username;

    #[ORM\Column(type: 'string')]
    private string $email;

    #[ORM\Column(type: 'string')]
    private string $password;

    public function getId(): int {
        return $this->id;
    }

    public function getFirstName(): string {
        return $this->fname;
    }

    public function getLastName(): string {
        return $this->lname;
    }

    public function getUsername(): string {
        return $this->username;
    }

    public function getEmail(): string {
        return $this->email;
    }

    public function getPassword(): string {
        return $this->password;
    }

    public function setFirstName(string $fname): void {
        $this->fname = $fname;
    }

    public function setLastName(string $lname): void {
        $this->lname = $lname;
    }

    public function setUsername(string $username): void {
        $this->username = $username;
    }

    public function setEmail(string $email): void {
        $this->email = $email;
    }

    public function setPassword(string $password): void {
        $this->password = $password;
    }

}