<?php

// App classes.
use App\Auth;
use App\Csrf;
use Slim\App;

use App\Config;

// Dependencies
use App\Session;
use Slim\Csrf\Guard;
use Slim\Views\Twig;
use function DI\create;
use Doctrine\ORM\ORMSetup;
use Slim\Factory\AppFactory;
use App\Services\HashService;
use Doctrine\ORM\EntityManager;
use App\Entities\AbstractEntity;
use App\Services\RequestService;
use Doctrine\DBAL\DriverManager;
use League\Flysystem\Filesystem;
use App\Interfaces\AuthInterface;
use App\DataObjects\SessionConfig;
use App\Services\UserLoginService;
use Twig\Extension\DebugExtension;
use Twig\Extra\Intl\IntlExtension;
use App\Interfaces\SessionInterface;
use App\Validators\ValidatorFactory;
use Symfony\Component\Asset\Package;
use Symfony\Component\Mailer\Mailer;
use App\Services\QueryBuilderService;
use App\Services\UserServiceProvider;
use Psr\Container\ContainerInterface;
use Symfony\Component\Asset\Packages;
use App\Services\EntityManagerService;
use Symfony\Component\Mailer\Transport;
use App\Interfaces\HashServiceInterface;
use Doctrine\ORM\EntityManagerInterface;
use Slim\Interfaces\RouteParserInterface;
use Symfony\Bridge\Twig\Mime\BodyRenderer;
use App\Interfaces\RequestServiceInterface;
use App\Interfaces\UserLoginServiceInterface;
use App\Interfaces\ValidatorFactoryInterface;
use Symfony\Component\Mailer\MailerInterface;
use Psr\Http\Message\ResponseFactoryInterface;
use App\Interfaces\QueryBuilderServiceInterface;
use App\Interfaces\UserServiceProviderInterface;
use App\Interfaces\EntityManagerServiceInterface;
use Symfony\Bridge\Twig\Extension\AssetExtension;
use Symfony\Component\Mime\BodyRendererInterface;
use League\Flysystem\Local\LocalFilesystemAdapter;
use Symfony\WebpackEncoreBundle\Asset\TagRenderer;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookup;
use Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupCollection;
use Symfony\Component\Asset\VersionStrategy\JsonManifestVersionStrategy;

// Container bindings.
return [
    /**
     * The main container for our App class.
     * 
     * Here we set up the App with AppFactory class, routes and middlewares.
     */
    App::class => function (ContainerInterface $container) {
        AppFactory::setContainer($container);

        $routes = require ROUTES_PATH . '/web.php';
        $middlewares = require CONF_PATH . '/middlewares.php';
 
        $app = AppFactory::create();

        $routes($app);
        $middlewares($app);

        return $app;
    },

    /**
     * Add config class to our container to retrieve every the configuration 
     * of this framework.
     */
    Config::class => create(Config::class)->constructor( require CONF_PATH . '/config.php' ),

    /**
     * Doctrine ORM Entity configuration.
     * 
     * We config the Entity Manager once in doctrine to use it, for example, in our
     * migrations configuration commands (bin/doctrine).
     */
    EntityManagerInterface::class => function (Config $config) {
        // ORM Config.
        $ormConfig = ORMSetup::createAttributeMetadataConfiguration(
            paths: $config->get('doctrine.entity_path'),
            isDevMode: $config->get('doctrine.dev_mode')
        );

        // Doctrine DB Connection.
        return new EntityManager(
            DriverManager::getConnection(
                $config->get('doctrine.connection'), 
                $ormConfig
            ),
            $ormConfig
        );
    },

    /**
     * Query builder service.
     */
    QueryBuilderServiceInterface::class => function(ContainerInterface $container) {
        return $container->get(QueryBuilderService::class);
    },

    /**
     * Configure the session object.
     */
    SessionInterface::class => function (Config $config): Session {
        return new Session(
            new SessionConfig(
                $config->get('session.lifetime'),
                $config->get('session.secure'),
                $config->get('session.http_only'),
                $config->get('session.same_site'),
                $config->get('session.flash_name'),
                $config->get('session.logout.tab_close')
            )
        );
    },

    /**
     * Auth interface.
     */
    AuthInterface::class => function (ContainerInterface $container) {
        return $container->get(Auth::class);
    },

    /**
     * Twig template engine config.
     */
    Twig::class => function (Config $config, ContainerInterface $container): Twig {
        $twig = Twig::create(
            VIEWS_PATH,
            [
                'cache'     => $config->get('twig.cache') ? STORAGE_PATH . '/cache/views' : false,
                'auto_load' => $config->get('app_environment') === 'dev' ? true : false,
                'debug'     => true
            ]
        );

        $twig->addExtension(new IntlExtension());
        $twig->addExtension(new EntryFilesTwigExtension($container));
        $twig->addExtension(new AssetExtension( $container->get('webpack_encore.packages') ));
        $twig->addExtension(new DebugExtension());

        return $twig;
    },

    /**
     * Request service binding.
     */
    RequestServiceInterface::class => function() {
        return new RequestService();
    },

    /**
     * Webpack.
     */
    'webpack_encore.packages' => function() { 
        return new Packages(
            new Package(new JsonManifestVersionStrategy(BUILD_PATH . '/manifest.json'))
        );
    },
    'webpack_encore.tag_renderer' => function(ContainerInterface $container) { 
        return new TagRenderer(
            new EntrypointLookupCollection($container),
            $container->get('webpack_encore.packages')
        );
    },
    '_default' => function() {
        return new EntrypointLookup(BUILD_PATH . '/entrypoints.json');
    },

    /**
     * Body renderer interface.
     */
    BodyRendererInterface::class => function(Twig $twig) {
        new BodyRenderer($twig->getEnvironment());
    },

    /**
     * Route parser interface.
     */
    RouteParserInterface::class => function(App $app) {
        $app->getRouteCollector()->getRouteParser();
    },

    /**
     * Response factory interface and response factory.
     */
    ResponseFactoryInterface::class => function (App $app) {
        return $app->getResponseFactory();
    },

    /**
     * Implement CSRF protection.
     */
    'csrf' => function (ResponseFactoryInterface $responseFactory, Csrf $csrf) {
        return new Guard(
            $responseFactory,
            persistentTokenMode: true,
            failureHandler: $csrf->handleFailure(),
        );
    },

    /**
     * Validator factory.
     */
    ValidatorFactoryInterface::class => function(ContainerInterface $container) {
        return $container->get(ValidatorFactory::class);
    },

    /**
     * Add the filesystem management utility.
     */
    Filesystem::class => function(Config $config) {
        $localAdapter = new LocalFilesystemAdapter(
            $config->get('storage.local')
        );

        $filesystem = new Filesystem( $localAdapter );

        return $filesystem;
    },

    /**
     * Mailer.
     */
    MailerInterface::class => function(Config $config) {
        $dsn = $config->get('mailer.protocol') . '://' . $config->get('mailer.host') . ':' . $config->get('mailer.port');

        $transport = Transport::fromDsn($dsn);

        return new Mailer($transport);
    },

    /**
     * Bind to this container useful services.
     * 
     * "EntityManagerServiceInterface" returns a "EntityManagerService" which is a class wrap around
     * the default "EntityManager" (EntityManagerInterface) class provided by doctrine.
     * 
     * Thanks to this wrap I can reduce the code by standardazing some functions. 
     * 
     * For example, I can use the "save" method that I implemented instead of calling both "persist" and
     * "flush" methods each time I have to save an entity into the database.
     */
    EntityManagerServiceInterface::class => function(ContainerInterface $container) {
        return $container->get(EntityManagerService::class);
    },

    /**
     * Hash service implementation.
     */
    HashServiceInterface::class => function () {
        return new HashService();
    },

    /**
     * User provider service implementation.
     */
    UserServiceProviderInterface::class => function(ContainerInterface $container) {
        return $container->get(UserServiceProvider::class);
    },

    /**
     * User login service
     */
    UserLoginServiceInterface::class => function() {
        return new UserLoginService();
    }
];