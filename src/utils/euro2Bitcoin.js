export function euro2Bitcoin(price) {
    return `${(price / 5600).toFixed(2)} BTC`
}