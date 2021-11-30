# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chrislopesdev/lotide`

**Require it:**

`const _ = require('@chrislopesdev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Takes in two arrays and checks to see if they are equal.
* `assertEqual`: Compare two values and print out a message if they match or not.
* `assertObjectsEqual`: This function takes in two objects and console logs the pass or fail resuls based on equality.
* `countLetters`: This function takes in a string and returns a count of each of the letters in the string.
* `countOnly`: This function should take in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: This function takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: This function takes in two objects and returns true or false based on a perfect match.
* `findKey`: This function takes in an object and a callback and returns the object key based on the value given in the callback.
* `findKeyByValue`: This function takes in an object and a value and returns the first key which contains the given value.
* `flatten`: This function will take in nested arrays and flatten them into a single-level array.
* `head`: Takes in an array and returns the element at index 0.
* `letterPositions`: This function takes in a string and returns an object listing each letter and their index in the string.
* `map`: The map function will return a new array based on the results of the callback function.
* `middle`: Takes in an array and returns the middle-most element(s).
* `tail`: Takes in an array and returns an array of all elements excluding the element at index 0.
* `takeUntil`: This function takes in an array and pushes elements to a new array until it reaches a stop point based on a callback.
* `without`: Takes in an array and returns a new array, removing unwanted elements.