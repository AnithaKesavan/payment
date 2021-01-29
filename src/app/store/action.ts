import { createAction } from '@ngrx/store';

export class Payment {
    name: string;
    cardnumber: string;
    expiry: string;
    cvv: string;
    amount: number;
}

export const addPayment = createAction(
    '[Payment] Add Payment',
    (payment: Payment) => ({ payment })
);  



export const getPayment = createAction('[Payments] - Get payments');