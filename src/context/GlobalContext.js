import { createContext, useReducer } from "react";
import TransactionsReducer from "../reducers/TransactionsReducer";

const GlobalContext = createContext();

const initialState = {
    transactions: [
        { id: 1, text: 'Salary', type: 'income', amount: 10},
        { id: 2, text: 'Camera', type: 'expense', amount: 4},
    ]
};

const GlobalProvider = ({ children }) => {

    const [ state ] = useReducer(TransactionsReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{  
                transactions: state.transactions   
            }}>
            { children }
        </GlobalContext.Provider>
    );

}

export { GlobalContext, GlobalProvider }