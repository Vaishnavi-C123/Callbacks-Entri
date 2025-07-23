function abc(){
    console.log("I am inside abc")
}

console.log("Hello")
let interval = setInterval(abc, 1000)
console.log("Hi")

function clear()
{
    clearInterval(interval)
}

let timeout  = setTimeout(clear, 3000)
