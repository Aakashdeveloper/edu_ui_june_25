let a = "amSTerDam"
a.toUpperCase()
'AMSTERDAM'
a.toLowerCase()
'amsterdam'
a.charAt(0)
'a'
a.charAt(1)
'm'
a.charAt(-1)
''
a.at(1)
'm'
a.at(-1)
'm'
a.at(-2)
'a'

a.slice(1)
'mSTerDam'
a.slice(2)
'STerDam'
a.slice(-1)
'm'
a.slice(-2)
'am'
a.slice(1,4)
'mST'
a.slice(2,6)
'STer'

var b = "Hii"
undefined
var c = "hii"
undefined
b == c
false
b.toLowerCase() == c.toLowerCase()
true



let a = "amSTerDam"
undefined
a.charAt(0)
'a'
a.charAt(0).toUpperCase()
'A'
a.slice(1)
'mSTerDam'
a.slice(1).toLowerCase()

'msterdam'
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
'Amsterdam'

let a = "pAris"
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
'Paris'

let e = "Aakash"
undefined
e.length
6
let e = "   Aakash   "
undefined
e.length
12
e.trim()
'Aakash'
e.trim().length
6
let e = "   Aak ash   "
undefined
e.trim().length
7
e.trim()
'Aak ash'

let g = "i am going good"
undefined
g.replace('good','very good')
'i am going very good'
let g = "i good am going good"
undefined
g.replace('good','very good')
'i very good am going good'
g.replace(/good/g,'very good')
'i very good am going very good'

let e = "   Aak ash   "
e.replaceAll(' ','')
'Aakash'
e.replace(/ /g,'')
'Aakash'