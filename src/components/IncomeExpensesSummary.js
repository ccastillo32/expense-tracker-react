import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpensesSummary = () => {

    const { getSummary } = useContext(GlobalContext);

    const { incomes, expenses } = getSummary();

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${ incomes }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${ expenses }</p>
            </div>
        </div>
    );

}

export default IncomeExpensesSummary;