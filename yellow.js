


function xyz (name, lastname){
    return console.log("yoo  " + name + " " + lastname + " " + "!");
}

var no_1 = xyz("yallu", "Subba");
var no_2 = xyz("prajwal", "Subba");
var no_1 = xyz("aarif", "Mohammad");
var no_1 = xyz("rabi", "Shrestha");


function addition (a, b){
    var sum = a + b;
    return console.log("The Result of " + " " + a + " " + "plus" + " " + b + " " + "is" + " " + sum);
}


var n1 = addition(1, 2);
var n2 = addition(2, 3);
var n3 = addition(3, 4);
var n4 = addition(4, 5);
var n5 = addition(5, 6);



var person = {};

person.firstName = "Yalamber";
person.lastName = "Subba";

function sayHello (person){
    console.log ("Hello" + " " + person.firstName + " " + person.lastName);
}

sayHello(person);
