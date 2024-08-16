import { EtherspotBundler, PrimeSdk } from '../src';
import * as dotenv from 'dotenv';

dotenv.config();


async function main() {
  const etherspotBundlerApiKey = '09b9e55e-a8cb-47a9-8aed-52aea21c0842';
  // initializating sdk...
  const primeSdk = new PrimeSdk({ privateKey: process.env.WALLET_PRIVATE_KEY }, {
    chainId: Number(process.env.CHAIN_ID),
    bundlerProvider: new EtherspotBundler(Number(process.env.CHAIN_ID), etherspotBundlerApiKey)
  })

  // get EtherspotWallet address...
  const address: string = await primeSdk.getCounterFactualAddress();
  console.log('\x1b[33m%s\x1b[0m', `EtherspotWallet address: ${address}`);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
