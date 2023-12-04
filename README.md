# A sample proxy contract implementation with Hardhat

### Steps to install:

- `git clone https://github.com/sukanyaparashar/proxyexample.git`
- `npm install` - Download required packages.

### Deployment commands:

- `npx hardhat run scripts/deploy.js --network neondevnet` - Sample command of deploying `contracts/Implementation.sol` on Neon Devnet network. If you wish to deploy on Neon Mainnet then change the `--network` parameter to `neonmainnet`.
- Replace the address you get from the previous step in the "delegate.js" file.
- `npx hardhat run scripts/delegate.js --network neondevnet` - Sample command of deploying the proxy contract on Neon Devnet network.
- `npx hardhat verify --network neondevnet <CONTRACT_ADDRESS>` - Sample command of verifying a contract deployed on Neon Devnet network. `<CONTRACT_ADDRESS>` parameter has to be replaced with the smart contract address.

#### Before starting make sure to create .env file containing the following data ( make a copy of .env.example file and rename it to .env ):

```
    PRIVATE_KEY_OWNER=XYZ
```

- _PRIVATE_KEY_OWNER - the private key used to deploy the contracts._
