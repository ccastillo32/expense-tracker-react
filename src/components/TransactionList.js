import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">

                {
                    transactions.length === 0 &&
                    <li>No transactions</li>
                }

                {

                    transactions.length > 0 &&

                    transactions.map(tx => (
                        <Transaction key={ tx.id } transaction={ tx } />
                    ))
                }

            </ul>
        </div>
    );

}

export default TransactionList;