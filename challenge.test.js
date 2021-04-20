'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function that accepts an array of strings. Return the longest string.
------------------------------------------------------------------------------------------------ */

const longestString = (arr) => {
    // Solution code here...
    let longest = '';
    arr.forEach(element => {
        if (element.slice().length > longest.slice().length) {
            longest = element;
        }
    });
    return longest;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called isSimilar which takes two strings and returns true if they contain the same characters and false otherwise; if for example the two strings have the same characters and they are rearranged it will return true.
examples:

isSimilar("form","from")
=> true
isSimilar("farm","from")
=> false
isSimilar("cat","act")
=> true
------------------------------------------------------------------------------------------------ */

const isSimilar = (arr) => {
    // Solution code here...
    let sum1 = 0;
    let sum2 = 0;

    const first = arr[0].split('');
    const second = arr[1].split('');
    flag = 1;

    for (let index = 0; index < first.length; index++) {
        for (let j = 0; j < second.length; j++) {
            if (!first.includes(second[j])) {
                flag = 0
            }

        }
    }
    if (arr.length === 0) {
        return false
    } else {
        let len = arr[0].slice().length;

        for (let index = 0; index < len; index++) {
            sum1 = sum1 + arr[0].charCodeAt(index);
        }
        for (let index = 0; index < arr[1].slice().length; index++) {
            sum2 = sum2 + arr[1].charCodeAt(index);
        }
    }
    if (flag) {
        return true;
    }
    return false;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the string that is the longest in length', () => {
        expect(longestString(['hello', 'future', '401', 'students', '!'])).toStrictEqual('students');
        expect(longestString(['rubber', 'ducks', 'dont', 'quack', '!'])).toStrictEqual('rubber');
    });
});

describe('Testing challenge 2', () => {
    test('It Should return true if the string contains the same characters and false if otherwise', () => {
        expect(isSimilar(['from', 'from'])).toStrictEqual(true);
        expect(isSimilar(['farm', 'from'])).toStrictEqual(false);
        expect(isSimilar(['cat', 'act'])).toStrictEqual(true);
        expect(isSimilar(['cat', 'at'])).toStrictEqual(false);
        expect(isSimilar(['duck', 'ckud'])).toStrictEqual(true);
        expect(isSimilar(['rubber', 'duck'])).toStrictEqual(false);
        expect(isSimilar([])).toStrictEqual(false);
    });
});