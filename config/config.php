<?php
/**
 * Main framework configuration.
 */

return [
    /**
     * App attribute values.
     */
    'app_name'          => $_ENV['APP_NAME'],
    'app_url'           => $_ENV['APP_URL'],
    'app_key'           => $_ENV['APP_KEY'],
    'app_version'       => $_ENV['APP_VERSION'],
    'app_environment'   => $_ENV['APP_ENVIRONMENT'] ?? 'dev',

    /**
     * Doctrine configuration.
     */
    'doctrine' => [
        'dev_mode'      => false,
        'entity_path'   => [ APP_PATH . '/Entities' ],
        'connection' => [
            'dbname'    => $_ENV['DB_NAME'],
            'user'      => $_ENV['DB_USER'],
            'password'  => $_ENV['DB_PASSWORD'],
            'host'      => $_ENV['DB_HOST'] ?? 'localhost',
            'port'      => $_ENV['DB_PORT'] ?? '3306',
            'driver'    => $_ENV['DB_DRIVER'] ?? 'pdo_mysql'
        ],
        'seeders' => [
            'dir'       => BASE_PATH . '/database/seeders',
            'namespace' => 'Database\Seeders'
        ]
    ],

    /**
     * Session configuration.
     */
    'session' => [
        'logout'        => [
            'tab_close' => (bool) $_ENV['LOGOUT_TAB_CLOSE']
        ],
        'lifetime'      => (int) $_ENV['SESSION_LIFETIME'],
        'secure'        => $_ENV['SESSION_SECURE'] ? true : false,
        'http_only'     => $_ENV['SESSION_HTTPONLY'] ? true : false,
        'same_site'     => $_ENV['SESSION_SAMESITE'] ?? 'lax',
        'flash_name'    => 'flash'
    ],

    /**
     * Twig template engine configuration.
     */
    'twig' => [
        'cache' => (bool) $_ENV['TWIG_CACHE_ENABLED']
    ],

    /**
     * Storage.
     */
    'storage' => [
        'local' => STORAGE_PATH . '/app/'
    ],

    /**
     * Email.
     */
    'mailer' => [
        'protocol'  => $_ENV['MAIL_PROTOCOL'],
        'host'      => $_ENV['MAIL_HOST'],
        'port'      => $_ENV['MAIL_PORT'],
        'username'  => $_ENV['MAIL_USERNAME'],
        'password'  => $_ENV['MAIL_PASSWORD']
    ]
];