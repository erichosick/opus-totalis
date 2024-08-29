import {
  jest,
} from '@jest/globals';

/**
 * To assure we never clutter the test output with console logs, we mock the
 * console methods for each test.
 *
 * Enables using methods like toHaveBeenCalledTimes and toHaveBeenCalledWith.
 * @example
 * /// In a test
 * expect(global.consoleMocks.log).toHaveBeenCalledTimes(1);
 *
 * @note
 * We need access to the consoleMocks but we can't export/import: this file
 * because it is ran jest before each test. The only way to get access to the
 * current consoleMocks is to set them on the global object. We could try to
 * extend NodeEnvironment
 * (see (https://jestjs.io/docs/configuration#testenvironment-string))
 * but that was getting a bit difficult to code. Just using global for now.
 */

const consoleMethods = [
  'log',
  'info',
  'warn',
  'error',
  'debug',
];

type MockedConsoleMethods = {
  [key: string]: jest.Mock,
};

/// Initialize the global.consoleMocks
/// This needs to be set on each test run, because the global object is reset.
/// Running tests in parallel is not an issue. See
/// https://github.com/jestjs/jest/issues/5455 ""
const mockedConsoleMethods: MockedConsoleMethods = {};

beforeEach(() => {
  /// Setup the mockedConsoleMethods for each console method.
  /// This has to be done for each test, because the mocks are restored
  for (const method of consoleMethods) {
    const mock = jest.spyOn(console, method as keyof Console)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      .mockImplementation(((...args: any[]): void => {}) as any);
    mockedConsoleMethods[method] = mock as jest.Mock;
  }
});

afterEach(() => {
  /// Restore the original functions for console methods
  /// This resets the mock enabling us to call things like toHaveBeenCalledTimes
  /// and toHaveBeenCalledWith.
  for (const method of consoleMethods) {
    mockedConsoleMethods[method].mockRestore();
  }
});
