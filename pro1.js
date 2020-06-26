class Record {
    constructor(accountName, o_balance, c_balance){
        this.accountName = accountName;
        this.o_balance = o_balance;
        this.c_balance = c_balance;
    }
getBalance(){
    console.log(`The Account balance of ${this.accountName} is ${this.o_balance}`);
    }

deposit(){
    this.c_balance = this.o_balance + 555;

    console.log(this.c_balance);
}
update(){
    this.o_balance = this.c_balance;
}

}
    



var account1 = new Record('Prajwal Subba', 1111111);
var account2 = new Record('Yalamber Subba', 2222222, );
var account3 = new Record('Rabi Man Shrestha', 3333333);
var account4 = new Record('Mohammad Aarif', 4444444);


/*account1.getBalance();
account3.deposit();
*/
account2.deposit();
account2.update();
console.log(account2);

account2.deposit();
 console.log(account2);

/*userTwo.withdraw()

console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);










/*
var account1 = {}
    account1.name = 'Yalamber Subba';
    account1.balance = 1111111;
var account2 = {name : 'Prajwal Subba', balance : 2222222};   

function getBalance (a, b){
   
    console.log(`The balance in the account ${a} is ${b}`);
}

getBalance(account1.name, account1.balance);

getBalance(account2.name, account2.balance);



function deposit(c, amt) {
    c.balance = c.balance + amt
    console.log(c.balance);
}


deposit(account1, 555);
deposit(account1, 1);
*/
