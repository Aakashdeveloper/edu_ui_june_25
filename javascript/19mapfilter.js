> map is use to iterate over the array of the Element
>it always return the same length of output as input array
> it is use to apply the logics

var a = [3,4,5,56,3,7,4,8,354,86,9]
a.map((data)=>{return data*2})
[6, 8, 10, 112, 6, 14, 8, 16, 708, 172, 18]

> filter is use to filterout the output
> it may or may not return same length of output
> filter only return value for which condition is true

var a = [3,4,5,56,31,7,4,82,354,86,9]
a.filter((data) =>  {return data>10})
[56, 31, 82, 354, 86]