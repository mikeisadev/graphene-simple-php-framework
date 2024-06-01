<?php

use App\Config;
use App\Console\SeedDatabase;
use App\Console\GenerateAppKey;
use App\Console\GenerateEntity;
use App\Console\GenerateInterface;
use App\Console\GenerateMigration;
use App\Console\GenerateController;
use App\Console\GenerateDataObject;
use App\Console\GenerateMiddleware;
use Doctrine\Migrations\DependencyFactory;

/**
 * Default app commands.
 * 
 * We get custom commands from App\Console.
 */
return function (
    DependencyFactory $DepFactory, 
    Config $Config
) {
    $cmd = [
        new GenerateMigration($DepFactory),
        new GenerateAppKey(),
        new GenerateController(),
        new GenerateEntity(),
        new GenerateMiddleware(),
        new GenerateDataObject(),
        new GenerateInterface(),
        new SeedDatabase($DepFactory, $Config)
    ];

    return $cmd;
};