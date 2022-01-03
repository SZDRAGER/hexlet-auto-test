import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello', 'The function is not working correctly!');

assert.equal(capitalize(''), '', 'The function is not working correctly!');


console.log('All tests are passed!');