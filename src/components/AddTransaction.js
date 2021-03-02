import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { types } from "../reducers/ReducerTypes";

const AddTransaction = () => {

    const { dispatch } = useContext(GlobalContext);

    const [ text, setText ]     = useState('');
    const [ amount, setAmount ] = useState(0);

    const addTransaction = (e) => {
        e.preventDefault();
        const payload = { text, amount }; 
        dispatch({ type: types.ADD_TRANSACTION, payload })
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={ addTransaction }>

                {/* Text */}

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={ text }
                        onChange={ (e) => setText(e.target.value) }
                        placeholder="Enter text" 
                    />
                </div>

                {/* Amount */}

                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        value={ amount }
                        onChange={ (e) => setAmount(e.target.value) }
                        placeholder="Enter amount" 
                    />
                </div>

                {/* Button */}

                <button className="btn">Add transaction</button>

            </form>
        </>
    );

}

export default AddTransaction;