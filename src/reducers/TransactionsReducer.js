import { types } from "./ReducerTypes";

const TransactionsReducer = (state, action) => {

    switch(action.type) {
        case types.DELETE_TRANSACTION: {
            const id = action.payload?.id;
            return {
                ...state,
                transactions: removeTransaction(state.transactions, id)
            }
        }
        default: 
            return state;
    }

}

const removeTransaction = (transactions, id) => {
    return transactions.filter(tx => tx.id !== id );
} 

export default TransactionsReducer;