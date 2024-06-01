<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Exception;

final class GenerateMiddleware extends Command {

    protected static $defaultName = 'app:generate:middleware';

    protected static $defaultDescription = 'Generate a middleware';

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $className = $input->getArgument('middleware_name');

        if (file_exists(APP_PATH . '/Middlewares/' . $className . '.php')) {
            throw new Exception('[ERROR] This middleware class already exists!');
        }
        
        $entity = file_get_contents( BIN_PATH . '/templates/classes/middleware.tpl' );

        $entity = str_replace('<className>', $className, $entity);

        file_put_contents( APP_PATH . '/Middlewares/' . $className . '.php', $entity );

        $output->write('Middleware generated successfully');

        return Command::SUCCESS;
    }

    protected function configure(): void {

        $this
            ->addArgument( 'middleware_name', InputArgument::REQUIRED, 'The class name of the middleware.' );

    }

}