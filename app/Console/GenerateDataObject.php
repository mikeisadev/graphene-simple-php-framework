<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Exception;

final class GenerateDataObject extends Command {

    protected static $defaultName = 'app:generate:dto';

    protected static $defaultDescription = 'Generate a data object class.';

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $className = $input->getArgument('dto_name');

        if (file_exists(APP_PATH . '/DataObjects/' . $className . '.php')) {
            throw new Exception('[ERROR] This data object class already exists!');
        }
        
        $controller = file_get_contents( BIN_PATH . '/templates/classes/dto.tpl' );

        $controller = str_replace('<className>', $className, $controller);

        file_put_contents( APP_PATH . '/DataObjects/' . $className . '.php', $controller );

        $output->write('Data object class generated successfully!');

        return Command::SUCCESS;
    }

    protected function configure(): void {

        $this
            ->addArgument( 'dto_name', InputArgument::REQUIRED, 'The class name of the data object class.' );

    }

}