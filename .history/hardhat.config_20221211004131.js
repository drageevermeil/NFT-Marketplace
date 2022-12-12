require('@nomiclabs/hardhat-waffle');

const { API_URL, PRIVATE_KEY } = process.env;



module.exports = {
  solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: 'https://polygon-mumbai.g.alchemy.com/v2/G3IEUEQIzXaegDMq004Nb3cQwvCDUpeL',
         accounts: [`0x${'c659b2ce36a2de134809778a1cf4faaa91594a6c6e34c25563810b0fdc93e07b'}`]
      }
   },
};
