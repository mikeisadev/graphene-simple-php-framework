<?php

declare(strict_types=1);

namespace Database\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240520120932_create_users_table extends AbstractMigration
{

    public function up(Schema $schema): void
    {
        $table = $schema->createTable("users");
        $table->addColumn('id', 'integer', ['unsigned' => true, 'autoincrement' => true]);
        $table->setPrimaryKey(['id']);

        $table->addColumn('fname', 'string', ['length' => 255]);
        $table->addColumn('lname', 'string', ['length' => 255]);
        $table->addColumn('username', 'string', ['length' => 255]);
        $table->addColumn('email', 'string', ['length' => 255]);
        $table->addColumn('password', 'string', ['length' => 255]);

        $table->addUniqueIndex(['username']);
    }

    public function down(Schema $schema): void
    {
        $schema->dropTable("users");
    }
}
