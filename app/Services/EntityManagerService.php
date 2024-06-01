<?php

namespace App\Services;

use BadMethodCallException;
use Doctrine\ORM\EntityManagerInterface;
use App\Interfaces\EntityManagerServiceInterface;

class EntityManagerService implements EntityManagerServiceInterface {

    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {}

    /**
     * We always need to call default EntityManager methods.
     */
    public function __call(string $name, array $arguments) {
        if (method_exists($this->entityManager, $name)) {
            return call_user_func_array(
                [$this->entityManager, $name],
                $arguments
            );
        }

        throw new BadMethodCallException('Undefined method ' . $name . ' inside ' . $this->entityManager::class . ' class');
    }
    
    /**
     * Instead of calling "persist" and "flush" methods each time, I wrapped this
     * implementation inside an unique save function.
     */
    public function save($entity = null) {
        if ($entity) {
            $this->entityManager->persist($entity);
        }

        $this->flush();
    }

    public function delete($entity) {
        $this->entityManager->remove($entity);
        
        $this->save();
    }

}