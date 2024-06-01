<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Exception;

final class GenerateAppKey extends Command {

    protected static $defaultName = 'app:gen_key';

    protected static $defaultDescription = 'Generate app key in the .env file.';

    protected function execute(InputInterface $input, OutputInterface $output): int {
        if ( !file_exists(BASE_PATH . '/.env') ) {
            throw new Exception('[ERROR!] You must configure a ".env" file first before you can generate an app key!');
        }

        $env = file_get_contents(BASE_PATH . '/.env');

        $appKey = base64_encode( random_bytes(32) );

        if ( str_contains($env, 'APP_KEY') ) {
            $env = preg_replace('/^APP_KEY=.*/m', 'APP_KEY=' . $appKey, $env);
        } else {
            $env .= PHP_EOL . 'APP_KEY=' . $appKey;
        }

        file_put_contents(BASE_PATH . '/.env', $env);

        $output->writeln('App key generated successfully!');

        $output->writeln('Check your ".env" file at the root folder of your project and look for APP_KEY');

        return Command::SUCCESS;
    }

    protected function configure(): void {

    }

}