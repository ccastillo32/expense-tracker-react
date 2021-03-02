import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { types } from "../reducers/ReducerTypes";
import { displayNumber } from "../utils/displayNumber";

const Transaction = ({ transaction }) => {

    const { dispatch } = useContext(GlobalContext);
    const { id, type, text, amount } = transaction;
    const isExpense = type === 'expense';

    const deleteTransaction = (transactionId) => {
        dispatch({ 
            type: types.DELETE_TRANSACTION, 
            payload: { id: transactionId }
        });
    }

    return (
        <li className={ isExpense ? 'minus' : 'plus' }>
            { text }
            <span>{ displayNumber( isExpense ? amount * -1 : amount ) }</span>
            <button className="delete-btn" onClick={ () => deleteTransaction(id) }>X</button>
        </li>
    );

}

export default Transaction;