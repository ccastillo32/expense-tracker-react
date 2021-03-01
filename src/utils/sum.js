const sum = (transactions) => {
    return transactions.map(tx => tx.amount).reduce((a,b) => (a + b), 0);
}

export { sum }