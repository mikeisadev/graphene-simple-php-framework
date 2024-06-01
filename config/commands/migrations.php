<?php

use Doctrine\Migrations\DependencyFactory;
use Doctrine\Migrations\Tools\Console\Command;

/**
 * Here we have migrations commands for doctrine.
 */
return function (DependencyFactory $DepFactory) {
    $cmd = [
        new Command\CurrentCommand($DepFactory),
        new Command\DiffCommand($DepFactory),
        new Command\DumpSchemaCommand($DepFactory),
        new Command\ExecuteCommand($DepFactory),
        new Command\GenerateCommand($DepFactory),
        new Command\LatestCommand($DepFactory),
        new Command\ListCommand($DepFactory),
        new Command\MigrateCommand($DepFactory),
        new Command\RollupCommand($DepFactory),
        new Command\StatusCommand($DepFactory),
        new Command\SyncMetadataCommand($DepFactory),
        new Command\UpToDateCommand($DepFactory),
        new Command\VersionCommand($DepFactory),
    ];

    return $cmd;
};