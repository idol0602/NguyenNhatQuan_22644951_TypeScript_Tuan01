// 23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.

interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} in cash`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} with card`);
  }
}

const cash = new CashPayment();
cash.pay(100);

const card = new CardPayment();
card.pay(200);
