const calculateBalance = (allTransactions) => {
    return allTransactions.map( tx => tx.type === 'expense' ? (tx.amount * -1) : tx.amount)
                          .reduce((a,b) => a + b, 0);
}

export { calculateBalance }