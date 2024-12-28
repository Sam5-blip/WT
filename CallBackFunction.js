function square(num){
    return num * num;
}

function add(n1,n2,callback){
    let result = n1 + n2;
    return callback(result);
}

let n1 = 8, n2 = 5;
let ans = add(n1,n2,square)
console.log("Square : ",ans)