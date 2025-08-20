// 10. Create a class Account with public, private and readonly fields.
export class Account {
  public accountNumber: string;       
  private balance: number;            
  readonly createdAt: Date;           

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.createdAt = new Date();
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit must be greater than 0.");
      return;
    }
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
  }
}
