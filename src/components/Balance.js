import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {

    const context = useContext(GlobalContext);

    console.log( context );

    return (
        <div>
            <h4>YOUR BALANCE</h4>
            <h1>$0.00</h1>
        </div>
    );

}

export default Balance;