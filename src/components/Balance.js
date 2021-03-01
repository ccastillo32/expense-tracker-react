import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {

    const context = useContext(GlobalContext);
    const { transactions } = context;

    const [ balance, setBalance ] = useState(0);

    useEffect(() => {
        setBalance( calculateBalance(transactions) );
    }, [transactions]);

    const calculateBalance = (allTransactions) => {
        return allTransactions.map( tx => tx.type === 'expense' ? (tx.amount * -1) : tx.amount)
                              .reduce((a,b) => a + b, 0);
    }

    const displayNumber = (value) => {
        return value >= 0 ? `$${value}` : `-$${ Math.abs(value) }`
    } 

    return (
        <div>
            <h4>YOUR BALANCE</h4>
            <h1>{ displayNumber(balance) }</h1>
        </div>
    );

}

export default Balance;