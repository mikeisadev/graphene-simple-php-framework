<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Exception;

final class GenerateInterface extends Command {

    protected static $defaultName = 'app:generate:interface';

    protected static $defaultDescription = 'Generate a interface class.';

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $className = $input->getArgument('interface_name');

        if (file_exists(APP_PATH . '/Interfaces/' . $className . '.php')) {
            throw new Exception('[ERROR] This interface class already exists!');
        }
        
        $interface = file_get_contents( BIN_PATH . '/templates/classes/interface.tpl' );

        $interface = str_replace('<className>', $className, $interface);

        file_put_contents( APP_PATH . '/Interfaces/' . $className . '.php', $interface );

        $output->write('Interface class generated successfully!');

        return Command::SUCCESS;
    }

    protected function configure(): void {

        $this
            ->addArgument( 'interface_name', InputArgument::REQUIRED, 'The class name of the interface.' );

    }

}