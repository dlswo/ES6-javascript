const name = "USER00"

const temp = `Hello ${name}`

console.log(temp)

let arr = [1,2,3,4,5]

arr = [...arr, 10]

console.log(arr)

const obj = {
    name: "Hong Gil Dong"
}

const showName =() => {
    console.log("show Name")
    return "Hello"
}

console.log(showName())