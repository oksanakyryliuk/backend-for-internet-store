export enum Stutus {
    Pending='pending', //  Клієнт розпочав процес оформлення замовлення, але не завершив його.
    PaymentPending='payment pending', //Клієнт завершив процес оформлення замовлення, але платіж ще не підтверджено.
    Processing="processing", //в процес обробленная
    Delivered ="delivered",  // доставлено
    Complete="complete",  // завершення усього замовлення, отримано і т.д.
    Canceled="canceled", //відммінено
    Returned="returned"  //повернення

} 