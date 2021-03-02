import { displayNumber } from "../utils/displayNumber";

const Transaction = ({ transaction }) => {

    const { type, text, amount } = transaction;
    const isExpense = type === 'expense';

    return (
        <li className={ isExpense ? 'minus' : 'plus' }>
            { text }
            <span>{ displayNumber( isExpense ? amount * -1 : amount ) }</span>
            <button className="delete-btn">X</button>
        </li>
    );

}

export default Transaction;