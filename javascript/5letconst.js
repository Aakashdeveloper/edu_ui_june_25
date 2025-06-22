var > We can redeclare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10
var a >>>>> declare
a = 10 >>> assignment

var a = 10
a
10

var a = 11
a
11

a = 12
12
a
12


let a = 20
a
20

let a = 30
SyntaxError: Identifier 'a' has already been declared

a=30
a
30

const a = 20
a
20

const a = 21
a
Identifier 'a' has already been declared

a = 30
Assignment to constant variable.