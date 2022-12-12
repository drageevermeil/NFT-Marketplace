require('@nomiclabs/hardhat-waffle');

const { API_URL, PRIVATE_KEY } = process.env;



module.exports = {
  solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: 'https://polygon-mumbai.g.alchemy.com/v2/G3IEUEQIzXaegDMq004Nb3cQwvCDUpeL',
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
