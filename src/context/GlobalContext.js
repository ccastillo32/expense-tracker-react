import { createContext, useReducer } from "react";
import TransactionsReducer from "../reducers/TransactionsReducer";
import { calculateBalance } from "../utils/calculateBalance";
import { getTotalIncomesAndExpenses } from "../utils/getTotalIncomesAndExpenses";

const GlobalContext = createContext();

const initialState = {
    transactions: [
        { id: 1, text: 'Salary', type: 'income', amount: 5},
        { id: 2, text: 'Camera', type: 'expense', amount: 8},
    ]
};

const GlobalProvider = ({ children }) => {

    const [ state ] = useReducer(TransactionsReducer, initialState);

    const getTotalBalance = () => {
        return calculateBalance(state.transactions);
    }

    const getSummary = () => {
        return getTotalIncomesAndExpenses( state.transactions );
    }

    return (
        <GlobalContext.Provider
            value={{  
                transactions: state.transactions,
                getTotalBalance,
                getSummary  
            }}>
            { children }
        </GlobalContext.Provider>
    );

}

export { GlobalContext, GlobalProvider }