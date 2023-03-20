import { HttpRpcClient } from '../base/HttpRpcClient';
import { JsonRpcProvider } from '@ethersproject/providers';

export async function getHttpRpcClient(provider: JsonRpcProvider, bundlerUrl: string, entryPointAddress: string) {
  const chainId = await provider.getNetwork().then((net) => net.chainId);
  return new HttpRpcClient(bundlerUrl, entryPointAddress, chainId);
}
