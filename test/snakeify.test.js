"use strict";

const expect = require("chai").expect;

const snakeify_object = require("../");

describe("snakeify test", () => {

    it("should snakeify a flat camel cased object", () => {
        const cameled = {
            someProperty: "value",
            aUUID: "123-456",
            anArray: [1, 2, 3],
            thisIsNull: null
        };

        const expected = {
            some_property: "value",
            a_uuid: "123-456",
            an_array: [1, 2, 3],
            this_is_null: null
        };

        expect(snakeify_object(cameled)).to.deep.equal(expected);
    });

    it("should snakeify a hyphened property", () => {
        const hyphened = {
            "a-property": true
        };

        const expected = {
            "a_property": true
        };

        expect(snakeify_object(hyphened)).to.deep.equal(expected);
    });

    it("should snakeify a nested camel cased object", () => {
        const cameled = {
            someNestedProperty: {
                anotherUuid: "654-321"
            },
            anotherUUID: "789-000"
        };

        const expected = {
            some_nested_property: {
                another_uuid: "654-321"
            },
            another_uuid: "789-000"
        };

        expect(snakeify_object(cameled)).to.deep.equal(expected);
    });

    it("should snakeify an object containing an array of objects", () => {
        const cameled = {
            someArrayOfObjects: [
                { aProperty: 1 },
                { anotherProperty: "wat" }
            ]
        };

        const expected = {
            some_array_of_objects: [
                { a_property: 1 },
                { another_property: "wat" }
            ]
        };

        expect(snakeify_object(cameled)).to.deep.equal(expected);
    });

    it("should snakeify an array of objects", () => {
        const cameled = [
            { aProperty: 1 },
            { anotherProperty: "wat" }
        ];

        const expected = [
            { a_property: 1 },
            { another_property: "wat" }
        ];

        expect(snakeify_object(cameled)).to.deep.equal(expected);
    });
});
