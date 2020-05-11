const asteroide_melvin = require('./asteroide_melvin');
const asteroide_rafael = require('./asteroide_rafael');
const asteroide_fernando = require('./asteroide_fernando');

const axios = require('axios');


console.log('=== Asteroides de Melvin === ')

asteroide_melvin('1992-01-16')

console.log('=== Asteroides de Rafael === ')

asteroide_rafael('1992-01-16')

console.log('=== Asteroides de Fernando === ')

asteroide_fernando('1992-01-16')