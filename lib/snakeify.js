"use strict";

const isObject = (candidate) => {
    return candidate != null &&
        typeof candidate === "object" &&
        !Array.isArray(candidate);
}

const snakeifyKey = (key) => {
    return key
        .replace(/([A-Z][a-z]+)|([A-Z][A-Z]+)|([0-9][a-zA-Z]+)/g, '_$&')
        .replace(/([0-9]){1}/g, '$&_')
        .replace("-", "_")
        .toLowerCase();
}

const snakeifyArray = (array) => {
    return array.map(element => {
        if (Array.isArray(element)) {
            return snakeifyArray(element);
        }

        if (isObject(element)) {
            return snakeifyObject(element);
        }

        return element;
    });
}

const snakeifyObject = (object) => {
    if (Array.isArray(object)) {
        return snakeifyArray(object);
    }

    if (!isObject(object)) {
        return object;
    }

    const result = {};

    Object.entries(object).forEach(([key, value]) => {
        const snakedKey = snakeifyKey(key);
        if (isObject(value)) {
            result[snakedKey] = snakeifyObject(value);
        } else if (Array.isArray(value)) {
            result[snakedKey] = snakeifyArray(value);
        } else {
            result[snakedKey] = value;
        }
    });
    return result;
};

module.exports = snakeifyObject;
