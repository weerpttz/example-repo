function myFunc1 (a1) {
    console.log(a1.length);
} 
function myFunc2 (a2) {
    console.log(a2.toUpperCase());
}
function myFunc3 (a3) {
    console.log(a3.toLowerCase());
}
function myFunc4 (a4) {
	console.log(a4.replace(5555, 9999));
}
function myFunc5 (a5) {
	console.log(a5.substring(6, 14));
}
function myFunc6 (a6) {
    let x = a6.substr(0,5);
    let y = a6.substr(-4);
	console.log(x + y);
}

const text = 'Hello my world 5555, I am coming for you'

myFunc1(text)
myFunc2(text)
myFunc3(text)
myFunc4(text)
myFunc5(text)
myFunc6(text)