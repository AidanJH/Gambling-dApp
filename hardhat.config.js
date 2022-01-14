

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/CMPuvnlegUIMnFJtiTgUtH_52fRgkSpn",
      accounts: ["a1a462ed28e6f1dd65909e741f864bac4ee95132aa219e71d740408d2d05a983"],
    },
  },
};

