/**
 *
 * @param {integer} price
 * @returns {string}
 */

export const euro2Bitcoin = (price) => `${(price / 5600).toFixed(2)} BTC`;
