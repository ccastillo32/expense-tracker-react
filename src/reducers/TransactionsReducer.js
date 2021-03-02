import { removeTransaction } from "../utils/removeTransaction";
import { types } from "./ReducerTypes";

const TransactionsReducer = (state, action) => {

    switch(action.type) {
        case types.DELETE_TRANSACTION: 
            return deleteTransaction(state, action);
        case types.ADD_TRANSACTION:
            return addTransaction(state, action);
        default: 
            return state;
    }

}

const deleteTransaction = (state, action) => {
    const id = action.payload?.id;
    return {
        ...state,
        transactions: removeTransaction(state.transactions, id)
    };
}

const addTransaction = (state, action) => {
    const { text, amount } = action?.payload;
    const id = generateId();
    const transactionType = amount < 0 ? 'expense' : 'income';
    const amountAbs = Math.abs( amount );
    const transaction = { id, text, amount: amountAbs, type: transactionType };
    return {
        ...state,
        transactions: [ ...state.transactions, transaction ]
    };
}

const generateId = () => {
    return Math.floor(Math.random() * 1000000);
}

export default TransactionsReducer;