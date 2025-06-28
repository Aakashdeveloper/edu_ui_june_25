Array is a collection of homogeneous as well as hetrogeneous data type

let a = [1,2,3,4,5,6]  //array of number
let b = ["A","dd","fsdf","gddsg"] //array of string
let c = [true,false,false,true] //array of boolean

let d = [3,4,5,"ddf","gdfg",344,"gd",true,34]

let city = ["Delhi","Mumbai","Helsinki"]
city.length
3
city[0]
'Delhi'
city[1]
'Mumbai'

let city = ["Delhi","Mumbai","Helsinki"]
undefined
city.push('Boston')
4
city
(4) ['Delhi', 'Mumbai', 'Helsinki', 'Boston']
city.push('London')
5
city
(5) ['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
city.pop()
'London'
city.pop()
'Boston'
city
(3) ['Delhi', 'Mumbai', 'Helsinki']
city.pop(1)
'Helsinki'

let a =  ['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
undefined
a.unshift('Innsburg')
6
a
(6) ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
a.shift()
'Innsburg'

let a = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
undefined
a.slice(1)
(5) ['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
a.slice(1,4)
(3) ['Delhi', 'Mumbai', 'Helsinki']
a
(6) ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
a.slice(2,-1)
(3) ['Mumbai', 'Helsinki', 'Boston']

let a = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
splice(startIndex,deleteCount,values)

let a = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
undefined
a.splice(2,1)
['Mumbai']
a
(5) ['Innsburg', 'Delhi', 'Helsinki', 'Boston', 'London']
let a = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
undefined
a.splice(4,0,'Venice')
[]
a
(7) ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Venice', 'Boston', 'London']
a.splice(3,2,'Indore')
(2) ['Helsinki', 'Venice']
a
(6) ['Innsburg', 'Delhi', 'Mumbai', 'Indore', 'Boston', 'London']

//remove value on index number 2
a.splice(2,1)

// add value on index 4 and do not remove any value
a.splice(4,0,'Venice')




push > Add value at the end of array
pop > Remove the last value
shift > Remove the first value
unshift > Add value in the beginning of the array

slice
> provide portion of the array

splice
> will add /remove value from the index


let a = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']
undefined
a.indexOf('Venice')
-1
a.indexOf('Pune')
-1
a.indexOf('Innsburg')
0
a.indexOf('Boston')
4
a.indexOf('Mumbai')
2