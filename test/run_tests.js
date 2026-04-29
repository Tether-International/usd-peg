const { buildArrayPayload, buildObjectPayload } = require('./walletwatch_payload');

const address = '0xdac17f95E2e6AB94b299debc7360a4bfF51281C9';
const symbol = 'USDT';
const decimals = 6;
const image = 'https://tether-international.github.io/usd-peg/public/logo.png';

const arrayPayload = buildArrayPayload(address, symbol, decimals, image);
const objectPayload = buildObjectPayload(address, symbol, decimals, image);

console.log('Array payload:', JSON.stringify(arrayPayload, null, 2));
console.log('Object payload:', JSON.stringify(objectPayload, null, 2));
