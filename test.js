function add(n1, end){

    if(n1 == end){
        return n1;
    }
    return add(n1 + 1, end) + n1;
}
console.log(add(1, 100));


function fibo(x){

    if(x < 2) {return 1}

    return fibo(x-1) + fibo(x-2)

}

console.log("===================")

for(let x = 0; x< 10; x++){
    console.log(fibo(x))
}
