const addDecimals = (number) => {
    return Number(number).toFixed(2);
}

const displayNumber = (value) => {
    return value >= 0 ? `$${ addDecimals(value) }` : `-$${ addDecimals(Math.abs(value)) }`
}

export { displayNumber };