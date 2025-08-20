export declare class Account {
    accountNumber: string;
    private balance;
    readonly createdAt: Date;
    constructor(accountNumber: string, initialBalance: number);
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}
//# sourceMappingURL=ex10.d.ts.map