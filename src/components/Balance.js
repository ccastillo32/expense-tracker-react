import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { displayNumber } from "../utils/displayNumber";

const Balance = () => {

    const { getTotalBalance } = useContext(GlobalContext);
    const balance = getTotalBalance();

    return (
        <div>
            <h4>YOUR BALANCE:</h4>
            <h1>{ displayNumber(balance) }</h1>
        </div>
    );

}

export default Balance;