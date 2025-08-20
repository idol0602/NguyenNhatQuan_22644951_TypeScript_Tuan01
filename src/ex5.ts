// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().

export class BankAccount {
    balance : number;

    constructor(balance : number) {
        this.balance = balance;
    }

    deposit(ammount : number): void {
        this.balance += ammount
    }

    withdraw(ammount : number): void {
        this.balance -= ammount
    }
}

let b: BankAccount = new BankAccount(100)
b.deposit(50)
b.withdraw(20)
console.log(b.balance)