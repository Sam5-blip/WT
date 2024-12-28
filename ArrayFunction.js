let a = [25,20,45,50,89,90,5,2]
console.log("Array is: "+ a)
a.push(8)
console.log("Array after push is: ",a)

a.pop()
console.log("Array after pop is: ",a)

a.shift()
console.log("Array after shift is: ",a)

a.unshift(20)
console.log("Array after unshift is: ",a)

a.splice(2,0,10)
console.log("Array after splice is: ",a)

a.splice(2,1,1)
console.log("Array after splice is: ",a)

a.sort((a,b) => a - b)
console.log("Array after sort is: ",a)