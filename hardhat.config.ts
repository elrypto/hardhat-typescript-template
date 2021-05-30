import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "solidity-coverage";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

import "./tasks/clean";

dotenv.config();


const ALCHEMY_MAINNET: string = "https://eth-mainnet.alchemyapi.io/v2/" + process.env.ALCHEMY_API_KEY;
const COINMARKETCAP: string | undefined = process.env.COINMARKETCAP;



const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: {
      //   url: ALCHEMY_MAINNET,
      //   blockNumber: 12268090,
      // },
      chainId: 1337,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 600000,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 50,
    coinmarketcap: COINMARKETCAP,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};
export default config;