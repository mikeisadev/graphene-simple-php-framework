<?php

namespace App\Services;

use Doctrine\ORM\QueryBuilder;
use App\Interfaces\QueryBuilderServiceInterface;
use App\Interfaces\EntityManagerServiceInterface;

class QueryBuilderService implements QueryBuilderServiceInterface {

    public function __construct(
        private readonly EntityManagerServiceInterface $em
    ) {}

    public function build($entity, string $selector): QueryBuilder {
        return $this->em->getRepository($entity)->createQueryBuilder($selector);
    }

}