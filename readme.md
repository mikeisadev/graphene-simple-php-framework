# Graphene Simple MVC PHP Framework

### WARNING: This is a PHP framework made for learning and educational purposes. It is not made for real world projects that will go in production.

Graphene is a simple MVC PHP framework built by Michele Mincone that uses Slim (a mini PHP framework) and other libraries such as Doctrine for database abstraction, PHP-DI container to handle all the dependencies, Flysystem to manage the storage, some Symfony packages for other major features and much more.

To make this framework i took a lot of inspiration from other projects and youtube videos.

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

**Note: to handle user authentication and sessions in general, I've created two classes: app/Auth.php and app/Session.php**

Then there is a simple "My account" page where the user can change their credentials.

See inside "resources/views", everything is built with the TWIG templating engine.

I've also set up routes for default HTTP (axios) async calls with javascript. CSRF keys and values are already set up.

Missing features that I want to develop:
- Docker configuration for direct installation
- JWT authentication system (for now there is a file inside "app\JWT" that I didn't developed)
- Cron jobs through CLI commands
- Route strategies to directly access to entities or models inside the controller class method
- Web sockets with node js for real time applications

# Technical requirements
- PHP 8.1.10 or greater
- Apache 2.4.54
- MySQL 8.0.30

I've built this framework on Laragon version 6.0.

To install and work with this framework you also need to install MailHog on Laragon.

I used MailHog for Symfony Mailer configuration.

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

Install Composer and NodeJS if you don't have them on your local machine.

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

### SLIM configuration
For Slim there are three options to set if you want to display and handle errors and they are:

- SLIM_DISPLAY_ERROR_DETAILS
- SLIM_LOG_ERRORS
- SLIM_LOG_ERROR_DETAILS

Obviously, in a development environment they are set to 1 (true).

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

# How this framework works in short
This framework handles all its dependencies through dependency injection. 

Slim container interface and PHP-DI container are used to handle all the dependencies. 

You can see all the container bindings, or dependencies, inside "config/container/bindings.php" file.

Here I've set up a giant associative array that works as a data structure. As you can see I return this array for later use to actually build the container.

The general structure of this array consists of using the fully qualified names of the interface as key. But in some cases I've also used the fully qualified name of the class.

For the value I primarily used an anonymous function where I config and return the instance of the desired.

In some cases I've also used the **create** function from the PHP-DI package.

Following this pattern, I've created an array to map all the classes I need with their needed configuration.

In the "config/container/builder.php" I build the final dependency injection container taking everything from the bindings.php file.

In simpler words, I'm "launching" the container with all the classes to make them available when they are requested.

> Practically, if I need a specific configured class I can get it using their corresponding fully qualified name I've used inside the *bindings.php* file.
> As we'll see later, inside controller or middleware classes, I'll call the needed dependency inside the constructor using the fully qualified name of the interface or class

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

## Understand dependency injection in this framework
As I said before:

- in "config/container/bindings.php" I "map" all the needed classes with the fully qualified name of the corresponding interface or the class directly
- then inside "config/container/builder.php" I build or "launch" the container to make all the classes available inside the app

Now, open a controller class like "app/Controllers/AuthController.php" and analyze the constructor.

As you can see:
- I've create properties using property promotion
- I've set properties as readonly to avoid overwrites when using them
- I've type hinted the property with the interface or class that I need

Take this line inside the constructor:

```php
private readonly Twig $twig
```

Here I'm adding the twig dependency using ``` Twig ``` as data type.

The ``` Twig ``` data type will be used to resolve the Twig class getting it from the bindings inside "config/container/bindings.php". Slim does this job of resolving classes inside the bindings file.

Because I've added twig as dependecy, I can use it inside a method to render a twig template as a web page.

In fact, inside the "loginView" method I call the twig dependency (... $this->twig ...) rendering the "login.twig" template inside "resources/views/auth" folder.

```php
public function loginView(Request $request, Response $response): Response {
        
    return $this->twig->render(
        $response,
        'auth/login.twig'
    );
}
```

You can use the same reasoning for all the other dependencies.

Do you need to implement the Auth class to log out the user when needed?

Well you add the dependecy inside the constructor:
```php
private readonly AuthInterface $auth
```

Then you implement the functionality as I've done inside the logOut method:
```php
public function logOut(Request $request, Response $response): Response {
    $this->auth->logOut();

    return $response->withHeader('Location', '/login')->withStatus(302);
}
```

**Note: AuthInterface is the key used inside config/container/bindings.php that will return an instance of Auth.php class. Same thing for the Twig dependency.**

The mechanism is:
- Define a class inside bindings.php (the key will be fully qualified name of interface or class, the value will be the configured class)
- Inject the class inside the constructor using property promotion using as data hint the fully qualified name you used inside the bindings.php
- Use the depedency inside the class methods to implement the functionality you need

## The most important container binding: **App::class**
Go at the beginning of the array inside "config/container/bindings.php".

You'll see this piece of code:

```php
App::class => function (ContainerInterface $container) {
    AppFactory::setContainer($container);

    $routes = require ROUTES_PATH . '/web.php';
    $middlewares = require CONF_PATH . '/middlewares.php';
 
    $app = AppFactory::create();

    $routes($app);
    $middlewares($app);

    return $app;
}
```

This is the most important binding because here we have the instance of our app.

- "App::class" is the fully qualified name to resolve this instance
- the anonymous function is where we configure the base of our app:
    - first thing, we call the container interface inside the parameters
    - then we set the container from "AppFactory"
    - inside:
        - $routes we get all the routes we defined inside "routes/web.php"
        - $middlewares we get all the middlewares attached to the $app instance
    - then we create an instance of the app with "AppFactory::create()"
    - because $routes and $middleware requires a file which returns an anonymous function that will accept the app instance as parameter, we pass the $app instance inside those variables (that we call as functions)
    - finally we return the $app

After we built the container inside "config/container/builder.php", we require everything in bootstrap.php and we use the container inside "public/index.php".

Inside "public/index.php" we get the "App::class" (the instance of our app) and we call the method *run*.

## Adding a dependency
If you want to add a dependecy that you need to use inside a specific class you need to:

- Open "config/container/bindings.php" file
- Add a key-value pair where:
    - The key will be the fully qualified name of the interface of that class or of the class (after the interface or class name use "::class" to get the fully qualified name)
    - The value will be an anonymous function that:
        - can accept other dependencies as parameters:
            - use "ContainerInterface $container" as parameter to get already configured dependencies inside the container
        - returns the configured class

Some dependencies are "directly returned" such as the Auth implementation.

This is done to automatically get all the dependencies injected in the constructor of the Auth class (inside the app folder).

Take a look at *AuthInterface* implementation inside bindings.php:

```php
/**
 * Auth interface.
 */
AuthInterface::class => function (ContainerInterface $container) {
    return $container->get(Auth::class);
},
```
- "AuthInterface::class" is the fully qualified name of the interce for the Auth class
- In the value you will find an anonymous function with the variable $container and the PSR implementation of ContainerInterface from Slim
- Inside the body of this function:
    - we get the Auth class using the get method from the $container variable. Inside the get method we use the fully qualified class name of the Auth class
    - doing this, we'll retrieve the Auth class and all the requested dependencies inside its constructor. Note that all the dependencies requested inside the Auth class constructor are declared inside the bindings.php array.
    - finally, we return everything.

So, if you don't need any special configuration of the constructor for a specific class, you can use this method.

But remember that all the dependencies needed for that class must be declared inside the container.

So, inspect the constructor of the Auth class and you'll see that all the injected dependencies are binded inside bindings.php inside "config/container".

# Main framework folders

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

# Adding routes
To build your application you need to define how it behaves structuring URLs and defining how to access these resources assigning to each route an HTTP method.

You define routes inside "*web.php*" file inside routes folder in the root of this framework.

This file returns an anonymous function where I passed the app instance through the variable *$app*.

From this variable you'll define all your routes.

This is how you define a GET route:

```php
$app->get('/path', [Controller::class, 'getControllerMethod']);
```
> GET http://yourdomain.test/path

And this is how you define a POST route:

```php
$app->post('/path', [Controller::class, 'postControllerMethod']);
```
> Enable HTTP POST request on http://yourdomain.test/path

You can also group your routes like this:

```php
$app->group('', function (RouteCollectorProxy $group) {

    $group->get('/path', [Controller::class, 'getMethod']);
    $group->post('/path', [Controller::class, 'postMethod']);

});
```
> You'll have:
> GET http://yourdomain.test/path
> POST http://yourdomain.test/path

You use the *group* method that you call from the *$app* variable.

The first argument of the *group* method will be the base path of the child routes.

You can leave it blank or add a base path.

Then as second argument you call an anonymous function which will have a *RouteCollectorProxy $group* parameter from which you'll write your child routes.

If you need to identify each route by their name, you can define it using *setName* method:

```php
$app->get('/login', [Controller::class, 'loginMethod'])->setName('login');
$app->get('/register', [Controller::class, 'registerMethod'])->setName('register');
$app->get('/forgot-password', [Controller::class, 'forgotPasswordMethod'])->setName('forgot_password');
```
> Adding name on each route

```php
$app->group('', function (RouteCollectorProxy $group) {

    $group->get('/', [Controller::class, 'homeMethod'])->setName('home_page');
    $group->get('/about', [Controller::class, 'aboutMethod'])->setName('about_page');

});
```
> Adding name on children route in groups

Inside your twig templates you have access to "route" variable to get the route name of the current path:
```
{{ route }}
```

This is possible thanks to a middleware called "app/Middlewares/RouteContextMiddleware.php" added as app-level middleware inside "config/middlewares.php".

## Build APIs thanks to route grouping
Route grouping is great to build your APIs.

Let's build this API routes with these URLs:
- GET http://domain.test/api/posts
- POST http://domain.test/api/posts
- DELETE http://domain.test/api/posts
- PATCH http://domain.test/api/posts

```php
$app->group('/api', function (RouteCollectorProxy $group) {

    // Get all posts
    $group->get('/posts', [Controller::class, 'getPosts']);

    // Add a post
    $group->post('/posts', [Controller::class, 'createPost']);

    // Delete a post
    $group->delete('/posts', [Controller::class, 'deletePost']);

    // Update a post
    $group->patch('/posts', [Controller::class, 'updatePost']);

});
```

## More about routing with Slim
Read Slim documentation to learn more about [routing](https://www.slimframework.com/docs/v4/objects/routing.html).

**NOTE: Be sure to write your routes inside the anonymous function.**

*HOW IT WORKS: 
all the routes that you'll define will be added to your application inside "config/container/bindings.php". If you go on this file, search for the key "App::class" of the returning array.

After the anonymous function you will see that there is a variable called $routes that requires the file web.php, where you defined your routes.

Then this variable is called as a function where the $app instance with the container is passed.

This way all the routes of your applications are defined.

As we'll see, the same mechanism is used to register app level middlewares.
*

# Adding middlewares
Middlewares are handled by Slim and created inside "app\Middlewares" folder.

You can use the following command to generate a middleware:

```
php graphene app:generate:middleware <middleware_name>
```

You can add middlewares:
- Around the application (*app-level middlewares*)
- Per route or per route group (*route-level or route group level middlewares*)

Middlewares are structured in a concentric way, as described by [Slim documentation on middlewares](https://www.slimframework.com/docs/v4/concepts/middleware.html).

They are executed in an ascendant way, in fact the very last middleware you added will be the first to be executed and the very first one will be the last to be executed.

All the app-level middlewares are added inside "config/middlewares.php".

App-level middlewares are the ones that will be executed on every request.

They are the ones used for CSRF protection, to start session, to store validation errors and old form data in session variables and much more.

Their order is very important to make sure that the effect of each middleware is executed when is needed.

To add an app-level middleware you call the *add* method from the *$app* variable:

```php
$app->add(Middleware::class)
```

Then you can add middlewares on each route or route group inside "routes/web.php".

Use the *add* method to implement a middleware on a specific route:

```php
$app->get('/path', [Controller::class, 'method'])->add(Middleware::class);
```

You can also add multiple middlewares chaining *add* methods:

```php
$app->get('/path', [Controller::class, 'method'])
    ->add(Middleware1::class)
    ->add(Middleware2::class);
```

Using route groups, you can chain one or more middleware class that will affect all the child routes:

```php
$app->group('', function (RouteCollectorProxy $group) {

    $group->get('/', [Controller::class, 'homeMethod'])->setName('home_page');
    $group->get('/about', [Controller::class, 'aboutMethod'])->setName('about_page');
    $group->post('/about', [Controller::class, 'aboutPostMethod']);
    $group->get('/contact', [Controller::class, 'contactMethod'])->setName('contact_page');

})->add(Middleware::class);
```

**NOTE: I've already set up routes with controllers and middlewares as a generic example.**

## The middleware classes
If you go in an any middleware inside "app/Middlewares" you'll see that every class implements *MiddlewareInterface*.

Then, they have a public constructor where I inject the needed dependencies (that are called by Slim container interface).

In the constructor you will inject all the dependencies that you need.

Do not delete the default dependency ```ResponseFactoryInterface $responseFactory```, this is used to manipulate the response inside the middleware.

We also have a public method called "process" where I handle the request and the response.

Inside the "process" method you define the behavior of the middleware.

So you have to rely on Slim documentation for this.

# Adding Controllers

# Adding Models or Entities

# Handling Storage
**FEATURE AVAILABLE, DOCUMENTATION IS COMING**

# Sending Emails
**FEATURE AVAILABLE, DOCUMENTATION IS COMING**