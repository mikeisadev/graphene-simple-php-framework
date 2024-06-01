<?php

/**
 * Doctrine migrations config.
 */
return [
   // Migrations table config.
   'table_storage' => [
       'table_name'                 => 'migrations',
       'version_column_name'        => 'version',
       'version_column_length'      => 191,
       'executed_at_column_name'    => 'executed_at',
       'execution_time_column_name' => 'execution_time'
   ],

   // Setting migrations file paths.
   'migrations_paths' => [
       'Database\Migrations' => DATABASE_PATH . '/migrations'
   ],

   // Doctrine migrations config.
   'all_or_nothing'            => true,
   'transactional'             => true,
   'check_database_platform'   => true,
   'organize_migrations'       => 'none',
   'connection'                => null,
   'em'                        => null,
   'custom_template'           => __DIR__ . '/../bin/templates/migrations/template.tpl'
];