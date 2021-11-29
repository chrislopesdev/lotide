const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5); // True
assertEqual(head([6,7]), 5); // False
assertEqual(head([5]), 5); // True
assertEqual(head([]), 5); //False
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // True