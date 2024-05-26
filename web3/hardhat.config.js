require("@matterlabs/hardhat-zksync-solc");
const PRIVATE_KEY = 
"6b28ef0d814eddbdd6cb1ab8e4cec4e24bf7d1fb4517142997fe57c4b3357f37";
const RPC_URL = "https://alfajores-forno.celo-testnet.org"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // zksolc: {
  //   version: "1.3.9",
  //   compilerSource: "binary",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //     },
  //   },
  // },
  // networks: {
  //   zksync_testnet: {
  //     url: "https://zksync2-testnet.zksync.dev",
  //     ethNetwork: "goerli",
  //     chainId: 280,
  //     zksync: true,
  //   },
  //   zksync_mainnet: {
  //     url: "https://zksync2-mainnet.zksync.io/",
  //     ethNetwork: "mainnet",
  //     chainId: 324,
  //     zksync: true,
  //   },
  // },
  // paths: {
  //   artifacts: "./artifacts-zk",
  //   cache: "./cache-zk",
  //   sources: "./contracts",
  //   tests: "./test",
  // },

  defaultNetwork : "alfajores" , 
  networks : {
      hardhat : {
        chainId : 44787
      } ,
      alfajores : {
        url : RPC_URL,
        accounts : ['0x6b28ef0d814eddbdd6cb1ab8e4cec4e24bf7d1fb4517142997fe57c4b3357f37']
      }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};


// Client :   5a00ae3fcaf28d1e81befae895dbe648
// Secret Key : JpihnYwgD4j093CgMIeCHYg9gAnUKvlIFsTo0DMbhxJGeyuugqkSmbLZozf6vSC-5xlUeMKXL8uCPzRm4r35Hw