console.log('hello world!')

console.log(3000 * 2);
console.log(4200 * 4 + 4800 * 2);
console.log(4200 + 4800);
console.log(3000 + 4200 * 4 + 4800 * 2);
console.log(4200 * 3);

// 변수 선언
let espressoPrice;
espressoPrice = 3000;

console.log("Espresso Price :", espressoPrice);

let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice * 3);

// 함수 선언
function greetings() {
    console.log('안녕');
    console.log('Hi')
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
}

// 함수 호출
greetings();

// 함수 선언
function greetings(sentense) {
    console.log('안녕');
    console.log('Hi')
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
    console.log(sentense);
}

// 함수 호출
console.log('===================');
greetings('hola');
console.log('===================');
greetings();


function welcome (name) {
    console.log('안녕하세요 ' + name + '님')
}

welcome('민지');
welcome('고구마');

function printSquare(x) {
    console.log(x * x);
}

printSquare(4);
printSquare(2);
printSquare(16);

function printSum(a,b) {
    console.log(a+b);
}

printSum(5,15);