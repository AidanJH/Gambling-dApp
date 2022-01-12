

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/d_XNxC7Fw9JWWiTVvlwpiaGVZ05ajt5j",
      accounts: ["c51afe6d45e5b6ee2eb26d9ab8447cc0c2e6e22b4160b083938d1a776e2bf606"],
    },
  },
};

