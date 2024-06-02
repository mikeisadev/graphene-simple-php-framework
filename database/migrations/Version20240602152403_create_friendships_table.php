<?php

declare(strict_types=1);

namespace Database\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240602152403_create_friendships_table extends AbstractMigration
{

    public function up(Schema $schema): void
    {
        $table = $schema->createTable("friendships");
        $table->addColumn('id', 'integer', ['unsigned' => true, 'autoincrement' => true]);
        $table->setPrimaryKey(['id']);
    }

    public function down(Schema $schema): void
    {
        $schema->dropTable("friendships");
    }
}
