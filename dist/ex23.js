"use strict";
// 23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} in cash`);
    }
}
class CardPayment {
    pay(amount) {
        console.log(`Paid ${amount} with card`);
    }
}
const cash = new CashPayment();
cash.pay(100);
const card = new CardPayment();
card.pay(200);
//# sourceMappingURL=ex23.js.map