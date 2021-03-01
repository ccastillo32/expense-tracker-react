import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { calculateBalance } from "../utils/calculateBalance";
import { displayNumber } from "../utils/displayNumber";

const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    
    const balance = calculateBalance( transactions );

    return (
        <div>
            <h4>YOUR BALANCE:</h4>
            <h1>{ displayNumber(balance) }</h1>
        </div>
    );

}

export default Balance;