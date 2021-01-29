import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './action';
import { Payment } from './action';

export const paymentFeatureKey = 'payment';

export interface PaymentState {
    payments: Payment[],
    error: Error
}

export const initialState: PaymentState = {
    payments: [],
    error: null
};
export const paymentReducer = createReducer(
    initialState,
    on(actions.addPayment,
        (state: PaymentState, { payment }) =>
        ({
            ...state,
            payments: [...state.payments, payment]
        })),
    on(actions.getPayment, state => state),
);

export function reducer(state, action): any {
    return paymentReducer(state, action);
}