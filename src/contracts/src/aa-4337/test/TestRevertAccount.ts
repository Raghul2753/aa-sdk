/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../../common';

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface TestRevertAccountInterface extends utils.Interface {
  functions: {
    'revertLong(uint256)': FunctionFragment;
    'validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'revertLong' | 'validateUserOp'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'revertLong',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'validateUserOp',
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: 'revertLong', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'validateUserOp',
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestRevertAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestRevertAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    revertLong(
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateUserOp(
      arg0: UserOperationStruct,
      arg1: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  revertLong(
    length: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  validateUserOp(
    arg0: UserOperationStruct,
    arg1: PromiseOrValue<BytesLike>,
    missingAccountFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    revertLong(
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      arg0: UserOperationStruct,
      arg1: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    revertLong(
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateUserOp(
      arg0: UserOperationStruct,
      arg1: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    revertLong(
      length: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      arg0: UserOperationStruct,
      arg1: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
