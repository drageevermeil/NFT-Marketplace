require('@nomiclabs/hardhat-waffle');

const { API_URL, PRIVATE_KEY } = process.env;



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: '0.8.4',
};
