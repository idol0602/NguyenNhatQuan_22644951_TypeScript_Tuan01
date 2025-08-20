// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
export class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(ammount) {
        this.balance += ammount;
    }
    withdraw(ammount) {
        this.balance -= ammount;
    }
}
let b = new BankAccount(100);
b.deposit(50);
b.withdraw(20);
console.log(b.balance);
//# sourceMappingURL=ex5.js.map