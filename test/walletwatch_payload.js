function buildArrayPayload(address, symbol, decimals, image) {
  return [{ type: 'ERC20', options: { address, symbol, decimals, image } }];
}

function buildObjectPayload(address, symbol, decimals, image) {
  return { type: 'ERC20', options: { address, symbol, decimals, image } };
}

module.exports = { buildArrayPayload, buildObjectPayload };
