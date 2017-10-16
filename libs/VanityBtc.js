const bitcoin = require("bitcoinjs-lib");
const ERRORS = {
  invalid: 'Invalid input'
};
const getRandomWallet = function () {
  const keyPair = bitcoin.ECPair.makeRandom();
  return {
    address: keyPair.getAddress(),
    privKey: keyPair.toWIF(),
  };
};
const isValidInput = function (hex) {
  if (!hex.length) return true;
  const re = /^[0-9A-Za-z]+$/g;
  return re.test(hex);
};
const isValidVanityWallet = function (wallet, input) {
  const _add = wallet.address;
  return _add.substr(1, input.length) === input;
};
const getVanityWallet = function (input = '') {
  if (!isValidInput(input)) throw new Error(ERRORS.invalid);
  let _wallet = getRandomWallet();
  while (!isValidVanityWallet(_wallet, input)) _wallet = getRandomWallet();
  return _wallet;
};
module.exports = {
  getVanityWallet: getVanityWallet,
  isValidInput: isValidInput,
  ERRORS: ERRORS
};
