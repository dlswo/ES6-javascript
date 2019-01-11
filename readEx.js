const fs = require("fs")

const f1 = () => new Promise((resolve, reject) => {
    fs.readFile("c:\\zzz\\aaa.txt", (err, data) => {
        console.log("read.............aaaaa")
        resolve()
    })
})

const f2 = () => new Promise((resolve, reject) => {
    fs.readFile("c:\\zzz\\bbb.txt", (err, data) => {
        console.log("read.............bbb")
        resolve()
    })
})

const f3 = () => new Promise((resolve, reject) => {
    fs.readFile("c:\\zzz\\ccc.txt", (err, data) => {
        console.log("read.............cccc")
        resolve()
    })
})

f1().then(f2).then(f3)