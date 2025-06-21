true
false

true+true
2
false+false
0

true is considered as 1
false is considered as 0


10+true
11
10/false
Infinity
"10"/true
10
"10"*true+true
11
"true"+"true"
'truetrue'
"true"-"true"
NaN

var a= "10"
var b = "20"
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30

var a= "10.11"
var b = "20.22"
parseInt(a)+parseInt(b)
30

parseFloat(a)+parseFloat(b)
30.33

var a= "10a5"
parseInt(a)
10

var a= "b10a5"
parseInt(a)
NaN

var a= "105abc"
parseInt(a)
105

var a= "abc105"
parseInt(a)
NaN


var a= "10"
var b = "20"
undefined
Number(a)+Number(b)
30
var a= "10.11"
var b = "20.44"
undefined
Number(a)+Number(b)
30.55
var a = "10a5"
undefined
Number(a)
NaN