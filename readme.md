# Graphene Simple MVC PHP Framework

### WARNING: This is a PHP framework made for learning and educational purposes. It is not made for real world projects that will go in production.

Graphene is a simple MVC PHP framework built by Michele Mincone that uses Slim (a mini PHP framework) and other libraries such as Doctrine for database abstraction, PHP-DI container to handle all the dependencies, Flysystem to manage the storage, some Symfony packages for other major features and much more.

To make this framework i took a lot of inspiration from other projects and youtube videos.

*Note*: I manually made two classes to handle Auth and Session. You can see them inside "app\Auth.php" and "app\Session.php".

In the list below there are all the features that this framework provides:
- MVC architecture
- PHPUnit framework for testing
- PHP dotenv by vlucas for environmental variables
- PHP-DI container (DEPENDENCY INJECTION CONTAINER)
- Slim mini framework implementation:
    - Routing
    - Middlewares
    - PSR-7 compliant HTTP requests and responses management
    - PSR-11 ContainerInterface implementation
    - CSRF protection by SLIM.
- TWIG templating engine
- TWIG configured for Slim
- Preconfigured base middlewares to handle:
    - form validation
    - old submitted data
    - registered user persistence
- Validations by vlucas (VALITRON package)
- Doctrine entities
- ORM by Doctrine
- Doctrine query builder
- Doctrine Database migrations
- Doctrine Database seeders
- Storage management with Flysystem package
- Mails by Symfony mailer (warning: I configured mailhog in laragon for this)
- Handmade Auth and Session management classes
- Pre built CLI commands to handle the creation of classes (controllers, entitites, migrations etc...)
- Symfony encore webpack configuration
- Base configuration of TailwindCSS
- Pre configured axios instance as HTTP with the needed headers for CSRF and for CRUD simple applications

This framework comes with a default application to register or login an user.

Then there is a simple "My account" page where the user can change their credentials.

See inside "resources/views", everything is built with the TWIG templating engine.

I've also set up routes for default HTTP (axios) async calls with javascript. CSRF keys and values are already set up.

Missing features that I want to develop:
- Docker configuration for direct installation
- JWT authentication system (for now there is a file inside "app\JWT" that I didn't developed)
- Cron jobs
- Route strategies to directly access to entities or models inside the controller
- Web sockets with node js for real time applications

# Technical requirements
- PHP 8.1.10 or greater
- Apache 2.4.54
- MySQL 8.0.30

I've built this framework on Laragon version 6.0.

To install and work with this framework you also need to install MailHog on Laragon.

I used MailHog for Symfony Mailer.

# Base dependencies of this framework
Below there's a list of the base dependencies that build up this framework:
- [PHP-DI](https://php-di.org/)
- [Slim](https://www.slimframework.com/):
    - [Slim Twig](https://www.slimframework.com/docs/v3/features/templates.html)
- [Twig](https://twig.symfony.com/)
- [PHPUnit](https://phpunit.de/index.html)
- [Doctrine](https://www.doctrine-project.org/index.html):
    - [ORM](https://www.doctrine-project.org/projects/orm.html)
    - [Migrations](https://www.doctrine-project.org/projects/migrations.html)
    - [DBAL](https://www.doctrine-project.org/projects/doctrine-dbal/en/4.0/index.html):
        - [Query builder](https://www.doctrine-project.org/projects/doctrine-dbal/en/4.0/reference/query-builder.html)
- [Valitron](https://github.com/vlucas/valitron)
- [Dotenv](https://github.com/vlucas/phpdotenv)
- [Symfony](https://symfony.com/):
    - [Command](https://symfony.com/doc/current/console.html)
    - [Cache](https://symfony.com/doc/current/components/cache.html)
    - [Mailer](https://symfony.com/doc/current/mailer.html)
    - [Webpack Encore](https://symfony.com/doc/current/frontend/encore/installation.html)
    - [Twig bridge](https://symfony.com/components/Twig%20Bridge)
- [League Flysystem Filesystem](https://flysystem.thephpleague.com/docs/)
- [Fzaninotto Faker](https://github.com/fzaninotto/Faker)

# Getting started

To get started with this framework clone it with GIT.

Install Composer and NodeJS if you don't have them.

At this point, run composer to install all the dependencies.

```
composer install
```

Composer will also autoload all the classes inside app folder.

The run NPM to install all the packages:

```
npm install
```

## Configure .env file

### APP fields
This framework comes with a blank ".env.example" configuration file.

You can find it in the root folder of the framework.

The first thing to do is to rename the file from ".env.example" to ".env", so you have to remove the ".example".

Now you must fill some of the fields that you are seeing.

Fill *APP_NAME* with the name of your app. 

Then write the url of the application after *APP_URL*. Start with "http://" or "https://" followed by the name domain of your app.

I've already inserted a sample URL (http://nameofyourapp.test). I ended up the URL with ".test" because it's the default for Laragon.

Do not insert any key manually for the *APP_KEY* field.

Run this command that I created for you:

```
php graphene app:gen_key
```

After this, you should see a base 64 encoded key on that field.

For the *APP_ENVIRONMENT* leave "dev".

### Database configuration
Now it's time to configure the database.

1) First thing, create a new database
2) Connect the database using the "DB" fields inside the .env file.

### SESSION configuration
Sessions are a crucial part of this framework.

You can decide the lifetime of the authenticated session of the user leveraging the *SESSION_LIFETIME* field.

Here you must insert a value in seconds.

*SESSION_SECURE*, *SESSION_HTTPONLY* and *SESSION_SAMESITE* are fields that I do not recommend to touch, they are really important for session security.

If in your local server you don't have HTTPS connection, you can change the *SESSION_SECURE* to 0 instead of 1.

### TWIG configuration
*TWIG_CACHE_ENABLED* is an option to decide if TWIG should store a cached version of views inside "storage/cache/views" folder.

For development purposes I switched it to 0 (false) to avoid clearing the cache each time.

### MAILER configuration.
This framework uses Symfony Mailer and mailhog as host using SMTP.

But first I've installed MailHog in Laragon.

Use these references:

MailHog github for download: [https://github.com/mailhog/MailHog](https://github.com/mailhog/MailHog)

Tutorial on how to install mailhog in laragon: [https://pen-y-fan.github.io/2023/01/04/how-to-set-up-laragon-on-a-new-windows-computer-part-5/](https://pen-y-fan.github.io/2023/01/04/how-to-set-up-laragon-on-a-new-windows-computer-part-5/)

Otherwise, you can read this guide to setup Symfony Mailer as you prefer:

[https://symfony.com/doc/current/mailer.html](https://symfony.com/doc/current/mailer.html)

So, in case you'll use MailHog leave the fields *MAIL_PROTOCOL*, *MAIL_HOST*, *MAIL_PORT*, *MAIL_USERNAME* and *MAIL_PASSWORD* as they are.

# Short description of how this framework works.

This framework handles all its dependencies through a dependency injection container using PHP-DI. 

You can see all the bindings (container bindings or dependencies) inside "config/container/bindings.php" file.

The "config/container/builder.php" file builds the container taking everything from the bindings.php file.

Then, in the bootstrap.php file, in the root of the folder:
- vendor/autoload.php file is required to autoload all the classes from "vendor" and "app" folders
- config/constants.php file is required to load important constants used inside the framework
- Dotenv is launched to load all the environmental variables from .env file
- The container builder is required and returned.

The "public" folder is where all the traffic is pushed. Precisely all the traffic is pushed in the "index.php" file (front controller pattern) to be able to correctly apply the MVC architecture.

Inside the index.php file, we require the boostrap.php file to get the container and all its bindings.

In fact, as you can see, I use the variable *$container* to then run the *App* class.

Shortly, this is how the application is configured at its base level.

Feel free to analyze all the files to deeper understand this framework.

## /config folder
Inside this folder resides all the framework configuration.

If you look inside "/commands" you'll see the implementation of custom CLI commands.

Inside "/container", as we have seen before, you'll find container bindings and builder.

"config.php" file is where all the environmental variables are arranged in a structured associative array.

We'll use this array to get each single configuration of the app to configure other classes and libraries such as Doctrine, Sessions, Twig and much more.

"constants.php" file contains all the important constants and paths used in the framework.

"middlewares.php" is a very important configuration file where all the main middlewares are added to the "app" instance.

"migrations.php" is a file where Doctrine Migrations is configured.

## /app folder
In the *app* folder you'll build the application itself following a modular approach and the MVC architecture.

Below there is a list of the most important folders:

- "Console": here you'll add classes to build custom CLI commands using Symfony Console

- "Controllers": here you'll create controller classes to add handlers (class functions to handle the behavior of each requested route or resource) with a very similar approach of Laravel

- "Entities": entities, or models, are classes used by Doctrine ORM to manage each database table. You can abstract the structure of a database table using entities and then you can use them to add, update or delete table rows.

- "Middlewares": in this folder you'll find all the middleware classes that are applied between the user request and the application. You can use them to check if an user is logged in, to persist objects or to do CSRF checks. I've added some default middleware:
    - to check if user is logged in or not (AuthMiddleware.php and GuestMiddleware.php)
    - to retrieve validation errors (ValidationExceptionMiddleware.php to get RuntimeExceptions from request validations and ValidationErrorsMiddleware.php to add the validation errors to the session)
    - to retrieve old inserted form data (OldFormDataMiddleware.php)
    - to check CSRF fields for Slim (CsrfFieldsMiddleware.php)
    - to start the session (SessionMiddleware.php)
    - to get the current route name (RouteContextMiddleware.php)
    - All these middleware, and other ones, are configured inside "config/middlewares.php" file.


## /docker folder
In this folder I'll put an entire Dockerfile for a container to run this framework.

## /database folder
In the database folder you'll find "*migrations*" and "*seeders*" folders.

In the "*migrations*" folder you can add classes to create database tables and their columns.

You can generate a migration with the following command:

```
php graphene app:generate:migration <table_name>
```

You also have a folder called "*seeders*" where you can create classes to populate database tables with fake custom data.

To create a seeder class you can duplicate the already present *Users.php* class for your own database table.

Here you can instantiate the entity class to add your data.

This framework comes with a library to generate fake data (fzaninotto/faker).

Read the documentation of this library for more information [fzaninotto/faker](https://github.com/fzaninotto/Faker).

## /resources folder
Inside this folder you'll find frontend resources.

You can manage and add stylesheets inside *CSS* folder and javascript files inside the *JS* folder.

Note that you can manage entry javascript files inside *webpack.config.js* file in the root folder of the framework.

Scroll at the line 22 (inside "*webpack.config.js*" file) and you can concatenate other javascript files adding:

- a name as first argument (you'll use this name inside the twig file to add the javascript file.)
- a path inside the resources folder for the targeted javascript file

```javascript
.addEntry("app", "./resources/js/app.js")
// Concatenate from here to add a javascript entry file

// .addEntry("fileName", "./resources/js/newFile.js")

// .addEntry("fileName", "path_to_resource")
```

Note that if you import a css file inside a javascript file, that css file will get the name of the entry that you set up inside "*webpack.config.js*".

If you run:

```
npm run build-dev
```

You are going to bundle up all your javascript and css files with webpack inside the "*public/build*" folder.

In the "*public/build*" folder you'll find the "*entrypoints.json*" file where all the added files inside "*webpack.config.js*" are mapped.

This file is really important when you are going to add the bundled files inside your twig files to add css and js to your application.

In the views folder you can add twig templates to build the frontend of your application.

Consult [TWIG documentation](https://twig.symfony.com/doc/) to learn about this templating engine.

*Note that TailwindCSS comes as default CSS library to build the frontend of your application.*

To add CSS and JS files to a TWIG template file you can use this for CSS:

```
{% block stylesheets %}
    {{ encore_entry_link_tags('fileName') }}
{% endblock %}
```

As the parameter for the function ```encore_entry_link_tags('fileName')``` you must use the file name that you added inside "*webpack.config.js*" file when you were adding entries.

Instead for JS files you'll use this block of code

```
{% block javascripts %}
    {{ encore_entry_script_tags('app') }}
{% endblock %}
```

## /routes folder
In this folder you have a file to manage the routes of your application called "*web.php*".

Here you have access to the variable "*$app*" from the anonymous function from which you can add all your routes using Slim.

Example, adding a get route:

```php
$app->get('/your-page', [ControllerClass::class, 'controllerClassMethod']);
```

As you can see, you can resolve the namespace of your controller classes and get the method that you want to use.

From here you can add middlewares or names to your routes.

Or you can group your routes as I've done for the starting application present with this framework.

```php
$app->group('', function (RouteCollectorProxy $group) {
    $group->get('/login', [AuthController::class, 'loginView'])->setName('login');
    $group->get('/register', [AuthController::class, 'registerView'])->setName('register');

    $group->post('/login', [AuthController::class, 'loginUser']);
    $group->post('/register', [AuthController::class, 'registerUser']);
})->add(GuestMiddleware::class);
```

Go deeper with routing reading the [documentation on Slim framework website](https://www.slimframework.com/docs/v4/objects/routing.html).

# CLI commands

## How I've configured CLI commands
In the root folder of this framework I've added a file called ```graphene``` where I've set up the base to start using CLI commands.

If you remember, inside "config/commands/custom.php" file I've added custom CLI commands using Command Symfony package.

## Explore the commands on this framework
If you are using Visual Studio Code or other IDEs, you can run the following command to get the list of all available commands:

```
php graphene
```

## Non-prebuilt CLI commands.
Doctrine gives you a lot of CLI commands that you can see running ```php graphene```.

For example you use the command below to run your migrations:

```
php graphene migrations:migrate
```

## Prebuilt CLI commands
In this framework I've added some CLI commands thanks to Symfony Command package.

For example, at the begging of this guide we've seen this command to generate the app key inside the .env file:

```
php graphene app:gen_key
```

Below I describe some commands I've added on this framework.

### app:generate:controller
To add a controller class inside "app/Controllers", use the command below. Be sure to add a controller name instead of "<controller_name>".

```
php graphene app:generate:controller <controller_name>
```
### app:generate:dto
If you want to add a PHP data object class use the command below. A class to transfer data will be added inside "app/DataObjects".
```
php graphene app:generate:dto <dto_name>
```

### app:generate:entity
To generate an entity class for Doctrine ORM inside "app/Entities" folder, you can use the following command:
```
php graphene app:generate:entity <entity_name>
```

### app:generate:interface
If you want to generate an interface inside "app/Interfaces" use the following command:
```
php graphene app:generate:interface <interface_name>
```

### app:generate:middleware
To generate a middleware class inside "app/Middlewares" use:
```
php graphene app:generate:interface <middleware_name>
```

### app:generate:migration
Do you need to generate a migration class to structure the tables of your database?

```
php graphene app:generate:migration <table_name>
```

After running this command you'll find a new class inside "database/migrations".

### app:seed
To seed your database tables with seed classes you've created inside "database/seeders", use the following command:

```
php graphene app:seed
```

# Slim Middlewares
Middlewares and routes are handled by Slim.

So you have to rely on Slim documentation for this.