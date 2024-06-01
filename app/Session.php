<?php

namespace App;

use Exception;
use RuntimeException;
use App\DataObjects\SessionConfig;
use App\Interfaces\SessionInterface;

/**
 * Session class utility for SESSION based authentication and more.
 */
class Session implements SessionInterface {

    public function __construct(
        private readonly SessionConfig $conf
    ) {}

    /**
     * Start the session.
     */
    public function start(): void {
        if ( $this->isActive() ) {
            throw new Exception('A session is already active!');
        }

        if ( headers_sent($file, $line) ) {
            throw new Exception('Headers already been sent in ' . $file . ' on line ' . $line);
        }

        session_set_cookie_params([
            'lifetime'  => !$this->conf->logoutOnClose ? $this->conf->lifetime : 0,
            'path'      => '/',
            'secure'    => $this->conf->secure,
            'httponly'  => $this->conf->httpOnly,
            'samesite'  => $this->conf->sameSite
        ]);

        session_name('GRAPHENE_SESSION');

        $sess = session_start([
            'sid_length' => 96,
            'sid_bits_per_character' => 6,
        ]);

        if (!$sess) {
            throw new Exception('Session failed starting!');
        }
    }

    public function save(): void {
        session_write_close();
    }

    public function isActive(): bool {
        return (session_status() === PHP_SESSION_ACTIVE);
    }

    public function regenerate(): bool {
        return session_regenerate_id();
    }

    public function destroy(): bool {
        return session_destroy();
    }

    public function set(string $key, mixed $value): void {
        $_SESSION[$key] = $value;
    }

    public function get(string $key): mixed {
        return $this->has($key) ? $_SESSION[$key] : null;
    }

    public function unset(string $key): void {
        unset( $_SESSION[$key] );
    }

    public function has(string $key): bool {
        return array_key_exists($key, $_SESSION);
    }

    public function setFlash(string $key, array $messages): void {
        $_SESSION[$this->conf->flashName][$key] = $messages;
    }

    public function getFlash(string $key): ?array {
        $messages = $_SESSION[$this->conf->flashName][$key];

        unset( $_SESSION[$this->conf->flashName][$key] );

        return $messages;
    }

    public function hasFlash(string $key): bool {
        if (!array_key_exists($this->conf->flashName, $_SESSION)) {
            return false;
        }

        return array_key_exists($key, $_SESSION[$this->conf->flashName]);
    }

}