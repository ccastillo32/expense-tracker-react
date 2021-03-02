const removeTransaction = (transactions, id) => {
    return transactions.filter(tx => tx.id !== id );
} 

export { removeTransaction };