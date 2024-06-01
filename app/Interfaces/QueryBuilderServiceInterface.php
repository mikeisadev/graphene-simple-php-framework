<?php

namespace App\Interfaces;

use Doctrine\ORM\QueryBuilder;

interface QueryBuilderServiceInterface {

    public function build($entity, string $selector): QueryBuilder;

}