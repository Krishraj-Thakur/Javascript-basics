function greet(name,lastname) {       //1 parameter called name
    console.log('hello ' + name + ' ' + lastname);
}

function square(number){
    return number*number;
}

let number = square(2);
console.log(number);
console.log(square(2));//this also works
//greet('john','smith');//argument
//greet('mary');