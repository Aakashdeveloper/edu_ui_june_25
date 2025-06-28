//it help to iterate over the data as well as print series
for(StaticRange,condition,operation)

for(i=0;i<5;i++){
    console.log(i)
}

0
1
2
3
4

let city = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']

for(i=0;i<city.length;i++){
    console.log(city[i])
}

Innsburg
Delhi
Mumbai
Helsinki
Boston
London

////
var i = 10
while(i<5){
    console.log(i);
    i++
}

////
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)

let city = ['Innsburg', 'Delhi', 'Mumbai', 'Helsinki', 'Boston', 'London']

for(mycity of city){
    console.log(mycity)
}