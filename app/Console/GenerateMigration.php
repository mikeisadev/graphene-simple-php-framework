<?php

namespace App\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\Migrations\Tools\Console\Command\DoctrineCommand;

final class GenerateMigration extends DoctrineCommand {

    protected static $defaultName = 'app:generate:migration';

    protected static $defaultDescription = 'Generate a migration. [table_name] parameter is required to set up a table name';

    /**
     * Migration up method.
     */
    private static $upMethod = <<<'CMD'
    $table = $schema->createTable("{{table_name}}");
    $table->addColumn('id', 'integer', ['unsigned' => true, 'autoincrement' => true]);
    $table->setPrimaryKey(['id']);
    CMD;

    /**
     * Migration down method.
     */
    private static $downMethod = '$schema->dropTable("{{table_name}}");';

    protected function execute(InputInterface $input, OutputInterface $output): int {

        // Get entity configuration.
        $configuration = $this->getDependencyFactory()->getConfiguration();

        // Get migration generator.
        $migrationGenerator = $this->getDependencyFactory()->getMigrationGenerator();

        // Get migration dirs and namespace.
        $dirs = $configuration->getMigrationDirectories();

        $namespace = key($dirs);

        // Get table name from input.
        $tableName = trim($input->getArgument('table_name'));

        // Generate class name.
        $className = $this->getDependencyFactory()->getClassNameGenerator()->generateClassName($namespace);

        $className .= '_create_' . $tableName . '_table';

        // Set up the up() and down() methods.
        $up = trim(str_replace('{{table_name}}', $tableName, static::$upMethod));

        $down = trim(str_replace('{{table_name}}', $tableName, static::$downMethod));

        // Generate migration.
        $path = $migrationGenerator->generateMigration($className, $up, $down);
        
        $output->writeln('Migration generated for the table name:');
        $output->writeln($input->getArgument('table_name'));

        return Command::SUCCESS;
    }

    protected function configure(): void {

        $this
            ->addArgument('table_name', InputArgument::REQUIRED, 'The table name of this migration');

        parent::configure();

    }
    
}