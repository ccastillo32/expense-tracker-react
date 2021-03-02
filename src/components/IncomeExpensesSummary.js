import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { displayNumber } from "../utils/displayNumber";
import { getTotalIncomesAndExpenses } from "../utils/getTotalIncomesAndExpenses";

const IncomeExpensesSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const { incomes, expenses } = getTotalIncomesAndExpenses(transactions);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{ displayNumber(incomes) }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{ displayNumber(expenses) }</p>
            </div>
        </div>
    );

}

export default IncomeExpensesSummary;