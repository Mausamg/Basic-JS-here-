let s = `Hello world !`;
console.log(s);
let array = ["Ram", "Shyam", "hari", "2", "4.33", 'q'];

//using forin loop
console.log("Using forin loop:");
for (let a in array) {
    console.log(a, array[a]);
}

//using simple for loop
console.log("Using normal for loop:")
for (let i = 0; i < array.length; i++) {
    console.log(i, array[i]);
}

//using forof loop
console.log("Using forof loop:")
for (let a of array) {
    console.log(a);
}

const letters = new Set(["a"]);
letters.add("b");
letters.add("a");
console.log(letters);
for (l of letters) {
    console.log(l);
}

//map=object
const fruits = new Map([
    ["apple", 100], ["orange", 300]
]);
fruits.set("Banana", 200);
console.log(fruits);
console.log(fruits.get("apple"));


//different types of primitives datatypes in js -->string, int , bigInt, undefined, boolean , symbol, null
//array, object, set, map are the different types of object-non primitives
console.log("Different types of datatypes in js:");
let name = "muller";
console.log(typeof (name));
let i = 2.334;
console.log(typeof (i));
let age = 33;
console.log(typeof (age));
let isMarried = true;
console.log(typeof (isMarried));

// console.log(array.isArray(arrays))


//in oneline function bracket isnot needed and return type is needed where as if bracket is used return is needed
let sum = (a, b) => a + b;
let sums = (a, b) => { return a + b };

//nornal function 
function sumss(a, b) {
    console.log(a + b);
}

//calling function 
console.log(sum(5, 5));
console.log(sums(10, 4));
sumss(3, 20);

//class
class hello {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const car1 = new hello("ford", 2017);
car1.cc = 2300;//adding property cc to the object where cc is identifier 
const car2 = new hello("BMW", 2019);
car2.cc = 3300;
console.log(car1, car2);

//callback herw 

function print(datat) {
    console.log(datat);
}
function calculator(n1, n2, mysCallBack) {
    let sum = n1 + n2;
    mysCallBack(sum);
}
calculator(5, 5, print);

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000)
    })
}
async function getWeather() {
    await api();
}
function getData(data) {
    return new Promise((resolve, resolve) => {
        setTimeout(() => {
            console.log("data", data);
            resolve("success");
        }, 2000)
    })
}
