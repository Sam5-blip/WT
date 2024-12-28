let a = 10;
{
    let a = 20;
    console.log("Let keyword inside function : ",a); // Output: 20
}
console.log("Let keyword outside function : ",a); // Output: 10

var b = 20;
{
    var b = 30;
    console.log("Var keyword inside function : ",b); // Output: 30
}
console.log("Var keyword outside function : ",b); // Output: 30