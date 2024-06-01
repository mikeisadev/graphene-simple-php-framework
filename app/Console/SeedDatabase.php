<?php

namespace App\Console;

use Exception;
use App\Config;
use Doctrine\Common\DataFixtures\Loader;
use Doctrine\Migrations\DependencyFactory;
use Symfony\Component\Console\Command\Command;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\Common\DataFixtures\Executor\MultipleTransactionORMExecutor;

final class SeedDatabase extends Command {

    protected static $defaultName = 'app:seed';

    protected static $defaultDescription = 'Seed the database with available database seeders.';

    public function __construct(
        private readonly DependencyFactory $depFactory,
        private readonly Config $config
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int {
        $seedersConfig = $this->config->get('doctrine.seeders');

        $seedersDir = scandir( $seedersConfig['dir'] );

        if ( count($seedersDir) === 2 ) {
            throw new Exception('You don\'t have seeders inside /database/seeders.');
        }

        $entityManager = $this->depFactory->getEntityManager();

        $executor = new MultipleTransactionORMExecutor($entityManager, new ORMPurger());

        $seedLoader = new Loader();

        foreach ($seedersDir as $seeder) {
            if ( in_array( $seeder, ['.', '..'] ) ) continue;

            $seedLoader->loadFromFile( DATABASE_PATH . '/seeders/' . $seeder );
        }

        $executor->execute($seedLoader->getFixtures(), append: true);
        
        $output->write('Database seeded successfully!');

        return Command::SUCCESS;
    }

}