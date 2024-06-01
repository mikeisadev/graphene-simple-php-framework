<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Exception;

final class GenerateEntity extends Command {

    protected static $defaultName = 'app:generate:entity';

    protected static $defaultDescription = 'Generate an entity (or model) class for Doctrine ORM.';

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $className = $input->getArgument('entity_name');
        $tableName = str_replace(' ', '_', strtolower($className));

        if (file_exists(APP_PATH . '/Entities/' . $className . '.php')) {
            throw new Exception('[ERROR] This entity class already exists!');
        }
        
        $entity = file_get_contents( BIN_PATH . '/templates/classes/entity.tpl' );

        $entity = str_replace('<tableName>', $tableName, $entity);
        $entity = str_replace('<className>', $className, $entity);

        file_put_contents( APP_PATH . '/Entities/' . $className . '.php', $entity );

        $output->write('Entity generated successfully');

        return Command::SUCCESS;
    }

    protected function configure(): void {

        $this
            ->addArgument( 'entity_name', InputArgument::REQUIRED, 'The class name of the entity for the Doctrine ORM.' );

    }

}