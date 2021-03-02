import { removeTransaction } from "../utils/removeTransaction";
import { types } from "./ReducerTypes";

const TransactionsReducer = (state, action) => {

    switch(action.type) {
        case types.DELETE_TRANSACTION: 
            return deleteTransaction(state, action);
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

export default TransactionsReducer;