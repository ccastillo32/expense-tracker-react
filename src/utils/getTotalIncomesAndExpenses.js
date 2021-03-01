const getTotalIncomesAndExpenses = (allTransactions) => {

    const incomes = allTransactions.filter(tx => tx.type === 'income')
                                   .map(tx => tx.amount)
                                   .reduce((a, b) => (a + b), 0);
    
    const expenses = allTransactions.filter(tx => tx.type === 'expense')
                                    .map(tx => tx.amount)
                                    .reduce((a,b) => (a + b), 0);

    return {
        incomes,
        expenses
    }

}

export { getTotalIncomesAndExpenses }