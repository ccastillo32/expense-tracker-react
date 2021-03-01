const displayNumber = (value) => {
    return value >= 0 ? `$${value}` : `-$${ Math.abs(value) }`
}

export { displayNumber };