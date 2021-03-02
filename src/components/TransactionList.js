import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { displayNumber } from "../utils/displayNumber";

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">

                {
                    transactions.map(tx => (
                        <li className={ tx.type === 'expense' ? 'minus' : 'plus' }>
                            { tx.text }
                            <span>{ displayNumber( tx.type === 'expense' ? tx.amount * -1 : tx.amount ) }</span>
                            <button className="delete-btn">X</button>
                        </li>
                    ))
                }

            </ul>
        </div>
    );

}

export default TransactionList;