function callbackTest()
{
    console.log("I am being printed inside callbackTest function.")
}

function callbackTest1()
{
    console.log("I am being printed inside callbackTest1 function.")
}

function add(n1, n2, a)
{
    console.log(n1+n2)
    a()
}

let a = 1
let b = 5

add(a,b, callbackTest1)
