/// TODO: Support bigint when there is better support from the
/// javascript ecosystem.

/**
 * Defines all valid primitives for the `Flexible` type.
 *
 * Aligns with JSON primitive types. See https://www.json.org/json-en.html.
 * `undefined` is included for convenience but is not a valid JSON primitive.
 * Note that during serialization with `JSON.stringify`, any key with a value of
 * `undefined` will be removed.
 */
type FlexiblePrimitive = string | number | boolean | null | undefined;

/**
 * Defines an array of `FlexibleValues`, which can be an array, an object, or
 * a `FlexiblePrimitive`.
 */
type FlexibleArray = FlexibleValue[];

/**
 * Represents any `Flexible` value, including primitives, objects, and arrays.
 * This differs from `Flexible` in that a `Flexible` can only be an object or
 * an array.
 */
type FlexibleValue = FlexiblePrimitive | FlexibleObject | FlexibleArray;

/**
 * Defines a `Flexible` object, where the values can be `FlexiblePrimitive`,
 * arrays, or other objects, and the keys must be strings. This can also be
 * viewed as a dictionary or map.
 */
interface FlexibleObject {
  [key: string]: FlexibleValue;
}

/**
 * `Flexible` is a TypeScript type that is compatible with JSON and preserves
 * key data insights often lost when using `any` or `unknown`. It is useful
 * in situations where the specific shape of the data is unknown, but it is
 * known to be JSON compatible.
 *
 * @example
 * ```typescript
 * type Person = {
 *   firstName: string,
 *   lastName: string,
 * };
 *
 * const person: Person = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 * };
 *
 * // Define a guard to check if the data is a Person
 * const isPerson = (value: Flexible): value is Person => {
 *   return typeof (value as FlexibleObject).firstName === 'string' &&
 *          typeof (value as FlexibleObject).lastName === 'string';
 * };
 *
 * // A Flexible is a superset of a Person
 * const flexible: Flexible = person;
 *
 * // Use a guard to convert from a Flexible to a Person
 * if (isPerson(flexible)) {
 *   const person: Person = flexible;
 * }
 * ```
 */
type Flexible = FlexibleArray | FlexibleObject;

export {
  type FlexiblePrimitive,
  type FlexibleValue,
  type FlexibleArray,
  type FlexibleObject,
  type Flexible
};
