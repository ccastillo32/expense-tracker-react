const sum = (amounts) => {
    return amounts.reduce((a,b) => (a + b), 0);
}

export { sum }