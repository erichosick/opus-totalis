"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coreTypes = require(".");
describe('json-type index', function () {
    describe('exports', function () {
        it('should export the correct types', function () {
            ///
            expect(Object.keys(coreTypes).length).toBe(0);
            expect(coreTypes).toBeDefined();
        });
    });
    describe('FlexiblePrimitive and FlexiblePrimitive[]', function () {
        it('should be a FlexiblePrimitive', function () {
            var value = 'string';
            expect(value).toBe('string');
            var value2 = 1;
            expect(value2).toBe(1);
            var value3 = true;
            expect(value3).toBe(true);
            var value6 = null;
            expect(value6).toBe(null);
        });
        it('should be a FlexibleArray', function () {
            var value = ['string', 1, true, null];
            expect(value).toEqual(['string', 1, true, null, undefined]);
        });
    });
    describe('FlexibleObject', function () {
        /// The intent of this test is to ensure that the data type is not
        /// redefined in such a way as it breaks the existing contract and
        /// that is actually supports the data shapes we are interested in.
        it('should be defined', function () {
            var example = {
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
    describe('Flexible', function () {
        /// The intent of this test is to ensure that the data type is not
        /// redefined in such a way as it breaks the existing contract and
        /// that is actually supports the data shapes we are interested in.
        it('should be defined', function () {
            var example = {
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
        it('should support arrays of objects', function () {
            var example = {
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
    describe('Defined Objects', function () {
        it('should support converting between hard coded types', function () {
            var hardCodedType = {
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
            var flexibleData = hardCodedType;
            expect(flexibleData).toEqual(hardCodedType);
        });
    });
    describe('support typescript types', function () {
        var person = {
            name: 'Happy User',
            age: 25
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var printPerson = function (person) { };
        printPerson(person);
        it('should support accepting any type as a value', function () { });
    });
});
