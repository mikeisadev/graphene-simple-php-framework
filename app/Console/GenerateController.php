<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Exception;

final class GenerateController extends Command {

    protected static $defaultName = 'app:generate:controller';

    protected static $defaultDescription = 'Generate a controller class.';

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $className = $input->getArgument('controller_name');

        if (file_exists(APP_PATH . '/Controllers/' . $className . '.php')) {
            throw new Exception('[ERROR] This controller class already exists!');
        }
        
        $controller = file_get_contents( BIN_PATH . '/templates/classes/controller.tpl' );

        $controller = str_replace('<className>', $className, $controller);

        file_put_contents( APP_PATH . '/Controllers/' . $className . '.php', $controller );

        $output->write('Controller class generated successfully!');

        return Command::SUCCESS;
    }

    protected function configure(): void {

        $this
            ->addArgument( 'controller_name', InputArgument::REQUIRED, 'The class name of the controller.' );

    }

}