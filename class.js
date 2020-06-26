class First {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }  
    deposit(){
      console.log(this.email, 'Just Logeed in');
    }
    
    withdraw(){
        console.log(this.email, 'Just Logeed in');
    }
}

var userOne = new First('xyz@gmail.com', 'xyz');
var userTwo = new First('abc@gmail.com', 'abc');

userOne.deposit();
userTwo.withdraw();


console.log(userOne);
console.log(userTwo);




