// > local scope
// > global scope

// enclose something
// curly brackets make a clousers
// var a = 10
// function add(){
//     var b = 20
//     return a+b
// }

// console.log(">>>>>add>>>",add())
// console.log(">>>>>a>>>",a)
// console.log(">>>>>b>>>",b)

// >>>>>add>>> 30
// >>>>>a>>> 10
// /Users/aakash/Desktop/api/June/june_ui_25/javascript/18clouser.js:13
// console.log(">>>>>b>>>",b)
//                         ^

// ReferenceError: b is not defined

var a = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log(">>>>>a>>>",a)
console.log(">>>>>b>>>",b)
