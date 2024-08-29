# @sqlpm-utils/flexible-type

A flexible TypeScript type compatible with JSON that preserves key data insights often lost when using the `any` or `unknown` type.

## Intent

The purpose of this package is to provide a versatile and adaptable type system, including the `Flexible` type, that can represent complex data structures, especially when the exact shape of the data is not known in advance. `Flexible` is designed to be fully JSON-compatible, supporting all JSON-serializable types, including primitives, arrays, and nested objects.

By using `Flexible`, you can retain important information about the structure and properties of your data that would otherwise be lost with `any` or `unknown`. This type is particularly useful when working with dynamic or loosely defined data, such as when retrieving data from an API or handling JSON files. It allows for easy casting to and from more specific types using type guards, enabling both flexibility and type safety without the complexity of generics.

In scenarios where you might typically use `any` or `unknown`, consider using `Flexible` instead to maintain better type safety and data integrity.

## Usage

### Flexible

`Flexible` is a TypeScript type that is compatible with JSON and preserves key data insights often lost when using `any` or `unknown`. It is useful in situations where the specific shape of the data is unknown, but it is known to be JSON compatible.

#### Example

```typescript
type Person = {
  firstName: string,
  lastName: string,
};

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
};

// Easy to cast to Flexible
const flexiblePerson: Flexible = person;

// Define a type guard to check if the data is a Person
const isPerson = (value: Flexible): value is Person => {
  return typeof (value as FlexibleObject).firstName === 'string' &&
         typeof (value as FlexibleObject).lastName === 'string';
};

// Use the guard to safely convert from Flexible to Person
if (isPerson(flexiblePerson)) {
  const fixedPerson: Person = flexiblePerson;
  console.log(fixedPerson);
}
```

### FlexibleValue

Used when the value is known to be an array, and object or a primitive. Differes from `Flexible` in that a `Flexible` can not be a primitive.

### FlexibleArray

Used when the value is known to be an array.

### FlexibleObject

Used when the value is known to be an object.
