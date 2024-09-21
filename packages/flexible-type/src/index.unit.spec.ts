import {
  type Flexible,
  type FlexiblePrimitive,
  type FlexibleArray,
  type FlexibleObject
} from '.';
import * as coreTypes from '.';

describe('json-type index', () => {
  describe('exports', () => {
    it('should export the correct types', () => {
      ///
      expect(Object.keys(coreTypes).length).toBe(0);
      expect(coreTypes).toBeDefined();
    });
  });

  describe('FlexiblePrimitive and FlexiblePrimitive[]', () => {
    it('should be a FlexiblePrimitive', () => {
      const value: FlexiblePrimitive = 'string';
      expect(value).toBe('string');
      const value2: FlexiblePrimitive = 1;
      expect(value2).toBe(1);
      const value3: FlexiblePrimitive = true;
      expect(value3).toBe(true);
      const value6: FlexiblePrimitive = null;
      expect(value6).toBe(null);
    });

    it('should be a FlexibleArray', () => {
      const value: FlexibleArray = ['string', 1, true, null];
      expect(value).toEqual(['string', 1, true, null, undefined]);
    });
  });

  describe('FlexibleObject', () => {
    /// The intent of this test is to ensure that the data type is not
    /// redefined in such a way as it breaks the existing contract and
    /// that is actually supports the data shapes we are interested in.

    it('should be defined', () => {
      const example: FlexibleObject = {
        numberValue: 1,
        nullValue: null,
        stringValue: 'string',
        booleanValue: true,
        arrayValue: [1, 2, 3, 'string2'],
        objectValue: {
          numberValue: 1,
          stringValue: 'string',
          booleanValue: true,
          arrayValue: [1, 2, 3, 'string']
        }
      };
      expect(example).toBeDefined();
    });
  });

  describe('Flexible', () => {
    /// The intent of this test is to ensure that the data type is not
    /// redefined in such a way as it breaks the existing contract and
    /// that is actually supports the data shapes we are interested in.

    it('should be defined', () => {
      const example: Flexible = {
        numberValue: 1,
        nullValue: null,
        stringValue: 'string',
        booleanValue: true,
        arrayValue: [1, 2, 3, 'string2'],
        objectValue: {
          numberValue: 1,
          stringValue: 'string',
          booleanValue: true,
          arrayValue: [1, 2, 3, 'string']
        }
      };
      expect(example).toBeDefined();
    });

    it('should support arrays of objects', () => {
      const example: Flexible = {
        users: [
          {
            name: 'User One',
            password: '12345'
          },
          {
            name: 'User Two',
            password: 'abcde'
          }
        ]
      };

      expect(example).toBeDefined();
    });
  });

  describe('Defined Objects', () => {
    type LogLevels = 'error' | 'warn' | 'info' | 'debug';

    type HardCodedType = {
      logLevel: LogLevels;
      numberValue: number;
      stringValue: string;
      booleanValue: boolean;
      arrayValue: number[];
      objectValue: {
        numberValue: number;
        stringValue: string;
        booleanValue: boolean;
        arrayValue: number[];
        nestedOnceMore: {
          numberValue: number;
          stringValue: string;
          booleanValue: boolean;
          arrayValue: number[];
        };
      };
    };

    it('should support converting between hard coded types', () => {
      const hardCodedType: HardCodedType = {
        logLevel: 'error',
        numberValue: 1,
        stringValue: 'string',
        booleanValue: true,
        arrayValue: [1, 2, 3],
        objectValue: {
          numberValue: 1,
          stringValue: 'string',
          booleanValue: true,
          arrayValue: [1, 2, 3],
          nestedOnceMore: {
            numberValue: 1,
            stringValue: 'string',
            booleanValue: true,
            arrayValue: [1, 2, 3]
          }
        }
      };
      const flexibleData: Flexible = hardCodedType;
      expect(flexibleData).toEqual(hardCodedType);
    });
  });

  describe('support typescript types', () => {
    type Person = {
      name: string;
      age: number;
    };

    const person: Person = {
      name: 'Happy User',
      age: 25
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const printPerson = (person: Flexible) => {};

    printPerson(person);

    it('should support accepting any type as a value', () => {});
  });
});
