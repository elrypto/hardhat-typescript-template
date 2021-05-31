# Base hardhat typescript project

Contracts and tests setup 


## Install Packages

```
yarn install
```

## Compile

```
yarn compile
```

## Test

```
yarn test
```

## Deploy

```
yarn local
yarn deploy

or

yarn deploy-kovan
```



Optionally - Need to add .ENV for alchemy for mainnet forking
```
ALCHEMY_API_KEY=
COINMARKETCAP=
ETHERSCAN=
PRIVATE_KEY=

```

PRIVATE_KEY is your testnet (e.g. KOVAN) private key that you can export from metamask