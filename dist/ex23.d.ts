interface Payment {
    pay(amount: number): void;
}
declare class CashPayment implements Payment {
    pay(amount: number): void;
}
declare class CardPayment implements Payment {
    pay(amount: number): void;
}
declare const cash: CashPayment;
declare const card: CardPayment;
//# sourceMappingURL=ex23.d.ts.map