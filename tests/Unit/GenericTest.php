<?php

use PHPUnit\Framework\TestCase;

class GenericTest extends TestCase {

    public function test_that_generic_test_case(): void {
        $array = ['generic_test'];

        $this->assertEquals($array, ['generic_test']);
    }

}