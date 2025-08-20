// 10. Create a class Account with public, private and readonly fields.
export class Account {
    accountNumber;
    balance;
    createdAt;
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.createdAt = new Date();
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit must be greater than 0.");
            return;
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
    }
}
//# sourceMappingURL=ex10.js.map