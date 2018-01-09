# jest-es6-mocking
Project that illustrates the usage of jest mocking for imports that are called with the "new" keyword.

## Setup
To allow Jest to do it's module mocking magic, it relies on babel, specifically the babel-jest plugin. See the package.json for required dependencies.

## The problem
I've setup a test for module A. Module A creates an instance of module B using the "new" keyword, and uses this instance internally. For proper unit-testing, you would want to mock any functionality in module B, but as it is being called with "new", you are unable to overwrite any functionality as the instance in not available.

## The solution
Jest offer a function, `jest.mock`, to overwrite the implementation of an imported/required module.

The mock that I created makes use of the module scope to generate a singleton instance, and return it with a function. So it doesn't matter if it is called with new or executed directly, it will always point to the same instance. This way, it is possible to do assertions and change the mock, because we can use import that module from our own test as well, and we get the same mock instance that is being used by our real A module.

## See for yourself

```
npm install
...
npm test
```
