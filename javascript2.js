myFunction=()=>{
    console.log("Hello");
}
myFunction();

function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    let a=x(1,3,4)
    console.log(a-y);
}
fun(product,7);

myFunctionNew=()=>{
    console.log("Mausam GG")
}
console.log("Before function call");
setTimeout(myFunction,5000);

setInterval(myFunctionNew,1000*3)
console.log("After function call");

//promise
let myPromise = new Promise(pending = (resolve, reject) => {
    resolve();
    reject();
})
myPromise.then(
    function (value) {
    },//code if successful
    function (error) { }//code if error
)

const p1 = new Promise((resolve, reject) => {
    console.log("Pizza order has been place")
    setTimeout(() => {
        const isPizzaAvailable = true;
        if (isPizzaAvailable) {
            resolve("Your pizza is ready")
        }
        else {
            reject("Sorry we ran out of pizza ");
        }
    }, 3000)
});
p1
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Thankyou for visiting!");
    })
const p4 = Promise.resolve("First")
const p2 = Promise.resolve("Second")
const p3 = Promise.resolve("Third")

Promise([p4, p2, p3]).then((values) => {//wait for all to resolve or atleast one to reject 
    console.log(values);
})

Promise.All()// waits for resolve or any to reject
// Promise.allSettled();//waits for all promise to resolve or reject
//Promise.race()// return faster 