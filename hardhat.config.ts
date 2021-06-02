import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

import "./tasks/clean";

dotenv.config();

const ALCHEMY_API_KEY:string = process.env.ALCHEMY_API_KEY || 'alchemy_key_not_found_add_to_env';
const ALCHEMY_MAINNET: string = "https://eth-mainnet.alchemyapi.io/v2/" + ALCHEMY_API_KEY;
const COINMARKETCAP: string | undefined = process.env.COINMARKETCAP;
const KOVAN_RPC_URL:string = process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY:string = process.env.PRIVATE_KEY || 'private_key_not_found_add_to_env';


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET,
        blockNumber: 12268090,
      },
      chainId: 1337,
    },
    // kovan: {
    //   // url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   // accounts: [`0x${PRIVATE_KEY}`],
    //   //saveDeployments: true,
    // },
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
