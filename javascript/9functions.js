let a = 10
let b = 20
a+b
30

keyword nameoffunction (parameter){
    return value
}

function add(a,b){
    return a+b
}

add(3,5)
8
add(4,9)
13
add("Hii","bie")
'Hiibie'

function isEven(userInput){
    let out;
    if(typeof(userInput) === "string"){
        out = "Invalid input"
    }else{
        if(userInput%2 == 0){
            out = `Number ${userInput} is even`
        }else{
            out = `Number ${userInput} is odd`
        }
    }
  
   
    return out
}
isEven(4)


function add(a,b){
    return a+b
}

undefined
isEven(1,2,3)
'Number 1 is odd'
isEven(1)
'Number 1 is odd'
add(1,2,3)
3
add(1)
NaN
1+undefined
NaN


//es6
const add = (a,b) => {return a+b}
add(1,2)
3