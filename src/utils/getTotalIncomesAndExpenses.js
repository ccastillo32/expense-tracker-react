import { sum } from "./sum";

const getTotalIncomesAndExpenses = (allTransactions) => {

    const incomes = allTransactions.filter(tx => tx.type === 'income');
    
    const expenses = allTransactions.filter(tx => tx.type === 'expense');

    return {
        incomes: sum(incomes),
        expenses: sum(expenses)
    }

}

export { getTotalIncomesAndExpenses }