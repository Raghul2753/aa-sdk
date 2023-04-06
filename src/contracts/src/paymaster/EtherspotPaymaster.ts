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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

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

export interface EtherspotPaymasterInterface extends utils.Interface {
  functions: {
    'add(address)': FunctionFragment;
    'addBatch(address[])': FunctionFragment;
    'addStake(uint32)': FunctionFragment;
    'check(address,address)': FunctionFragment;
    'checkSponsorFunds(address)': FunctionFragment;
    'deposit()': FunctionFragment;
    'depositFunds()': FunctionFragment;
    'entryPoint()': FunctionFragment;
    'getDeposit()': FunctionFragment;
    'getHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint48,uint48)': FunctionFragment;
    'owner()': FunctionFragment;
    'parsePaymasterAndData(bytes)': FunctionFragment;
    'postOp(uint8,bytes,uint256)': FunctionFragment;
    'remove(address)': FunctionFragment;
    'removeBatch(address[])': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'senderNonce(address)': FunctionFragment;
    'sponsorFunds(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unlockStake()': FunctionFragment;
    'validatePaymasterUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)': FunctionFragment;
    'whitelist(address,address)': FunctionFragment;
    'withdrawStake(address)': FunctionFragment;
    'withdrawTo(address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'add'
      | 'addBatch'
      | 'addStake'
      | 'check'
      | 'checkSponsorFunds'
      | 'deposit'
      | 'depositFunds'
      | 'entryPoint'
      | 'getDeposit'
      | 'getHash'
      | 'owner'
      | 'parsePaymasterAndData'
      | 'postOp'
      | 'remove'
      | 'removeBatch'
      | 'renounceOwnership'
      | 'senderNonce'
      | 'sponsorFunds'
      | 'transferOwnership'
      | 'unlockStake'
      | 'validatePaymasterUserOp'
      | 'whitelist'
      | 'withdrawStake'
      | 'withdrawTo'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'add',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'addBatch',
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'addStake',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'check',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'checkSponsorFunds',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'depositFunds',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'entryPoint',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getDeposit',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'getHash',
    values: [
      UserOperationStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'parsePaymasterAndData',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'postOp',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'remove',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'removeBatch',
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'senderNonce',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'sponsorFunds',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'unlockStake',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'validatePaymasterUserOp',
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'whitelist',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawStake',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawTo',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addBatch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addStake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'check', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'checkSponsorFunds',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'depositFunds',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'entryPoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getHash', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'parsePaymasterAndData',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'postOp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'remove', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'removeBatch',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'senderNonce',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sponsorFunds',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'unlockStake',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'validatePaymasterUserOp',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawStake',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'withdrawTo', data: BytesLike): Result;

  events: {
    'AddedBatchToWhitelist(address,address[])': EventFragment;
    'AddedToWhitelist(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'RemovedBatchFromWhitelist(address,address[])': EventFragment;
    'RemovedFromWhitelist(address,address)': EventFragment;
    'SponsorSuccessful(address,address,bytes)': EventFragment;
    'SponsorUnsuccessful(address,address,bytes)': EventFragment;
    'WhitelistInitialized(address,string)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddedBatchToWhitelist'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddedToWhitelist'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RemovedBatchFromWhitelist'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RemovedFromWhitelist'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SponsorSuccessful'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SponsorUnsuccessful'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WhitelistInitialized'): EventFragment;
}

export interface AddedBatchToWhitelistEventObject {
  paymaster: string;
  accounts: string[];
}
export type AddedBatchToWhitelistEvent = TypedEvent<
  [string, string[]],
  AddedBatchToWhitelistEventObject
>;

export type AddedBatchToWhitelistEventFilter =
  TypedEventFilter<AddedBatchToWhitelistEvent>;

export interface AddedToWhitelistEventObject {
  paymaster: string;
  account: string;
}
export type AddedToWhitelistEvent = TypedEvent<
  [string, string],
  AddedToWhitelistEventObject
>;

export type AddedToWhitelistEventFilter =
  TypedEventFilter<AddedToWhitelistEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RemovedBatchFromWhitelistEventObject {
  paymaster: string;
  accounts: string[];
}
export type RemovedBatchFromWhitelistEvent = TypedEvent<
  [string, string[]],
  RemovedBatchFromWhitelistEventObject
>;

export type RemovedBatchFromWhitelistEventFilter =
  TypedEventFilter<RemovedBatchFromWhitelistEvent>;

export interface RemovedFromWhitelistEventObject {
  paymaster: string;
  account: string;
}
export type RemovedFromWhitelistEvent = TypedEvent<
  [string, string],
  RemovedFromWhitelistEventObject
>;

export type RemovedFromWhitelistEventFilter =
  TypedEventFilter<RemovedFromWhitelistEvent>;

export interface SponsorSuccessfulEventObject {
  paymaster: string;
  sender: string;
  userOpHash: string;
}
export type SponsorSuccessfulEvent = TypedEvent<
  [string, string, string],
  SponsorSuccessfulEventObject
>;

export type SponsorSuccessfulEventFilter =
  TypedEventFilter<SponsorSuccessfulEvent>;

export interface SponsorUnsuccessfulEventObject {
  paymaster: string;
  sender: string;
  userOpHash: string;
}
export type SponsorUnsuccessfulEvent = TypedEvent<
  [string, string, string],
  SponsorUnsuccessfulEventObject
>;

export type SponsorUnsuccessfulEventFilter =
  TypedEventFilter<SponsorUnsuccessfulEvent>;

export interface WhitelistInitializedEventObject {
  owner: string;
  version: string;
}
export type WhitelistInitializedEvent = TypedEvent<
  [string, string],
  WhitelistInitializedEventObject
>;

export type WhitelistInitializedEventFilter =
  TypedEventFilter<WhitelistInitializedEvent>;

export interface EtherspotPaymaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EtherspotPaymasterInterface;

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
    add(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    check(
      _sponsor: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    checkSponsorFunds(
      _sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFunds(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    parsePaymasterAndData(
      paymasterAndData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, string] & {
        validUntil: number;
        validAfter: number;
        signature: string;
      }
    >;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remove(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    senderNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    sponsorFunds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelist(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  add(
    _account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBatch(
    _accounts: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addStake(
    unstakeDelaySec: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  check(
    _sponsor: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  checkSponsorFunds(
    _sponsor: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFunds(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getHash(
    userOp: UserOperationStruct,
    validUntil: PromiseOrValue<BigNumberish>,
    validAfter: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  parsePaymasterAndData(
    paymasterAndData: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [number, number, string] & {
      validUntil: number;
      validAfter: number;
      signature: string;
    }
  >;

  postOp(
    mode: PromiseOrValue<BigNumberish>,
    context: PromiseOrValue<BytesLike>,
    actualGasCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remove(
    _account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeBatch(
    _accounts: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  senderNonce(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  sponsorFunds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockStake(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validatePaymasterUserOp(
    userOp: UserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    maxCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whitelist(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdrawStake(
    withdrawAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    withdrawAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    add(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    check(
      _sponsor: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checkSponsorFunds(
      _sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<void>;

    depositFunds(overrides?: CallOverrides): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    parsePaymasterAndData(
      paymasterAndData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [number, number, string] & {
        validUntil: number;
        validAfter: number;
        signature: string;
      }
    >;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    remove(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    senderNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sponsorFunds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockStake(overrides?: CallOverrides): Promise<void>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { context: string; validationData: BigNumber }
    >;

    whitelist(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'AddedBatchToWhitelist(address,address[])'(
      paymaster?: PromiseOrValue<string> | null,
      accounts?: PromiseOrValue<string>[] | null
    ): AddedBatchToWhitelistEventFilter;
    AddedBatchToWhitelist(
      paymaster?: PromiseOrValue<string> | null,
      accounts?: PromiseOrValue<string>[] | null
    ): AddedBatchToWhitelistEventFilter;

    'AddedToWhitelist(address,address)'(
      paymaster?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AddedToWhitelistEventFilter;
    AddedToWhitelist(
      paymaster?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AddedToWhitelistEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    'RemovedBatchFromWhitelist(address,address[])'(
      paymaster?: PromiseOrValue<string> | null,
      accounts?: PromiseOrValue<string>[] | null
    ): RemovedBatchFromWhitelistEventFilter;
    RemovedBatchFromWhitelist(
      paymaster?: PromiseOrValue<string> | null,
      accounts?: PromiseOrValue<string>[] | null
    ): RemovedBatchFromWhitelistEventFilter;

    'RemovedFromWhitelist(address,address)'(
      paymaster?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): RemovedFromWhitelistEventFilter;
    RemovedFromWhitelist(
      paymaster?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): RemovedFromWhitelistEventFilter;

    'SponsorSuccessful(address,address,bytes)'(
      paymaster?: null,
      sender?: null,
      userOpHash?: null
    ): SponsorSuccessfulEventFilter;
    SponsorSuccessful(
      paymaster?: null,
      sender?: null,
      userOpHash?: null
    ): SponsorSuccessfulEventFilter;

    'SponsorUnsuccessful(address,address,bytes)'(
      paymaster?: null,
      sender?: null,
      userOpHash?: null
    ): SponsorUnsuccessfulEventFilter;
    SponsorUnsuccessful(
      paymaster?: null,
      sender?: null,
      userOpHash?: null
    ): SponsorUnsuccessfulEventFilter;

    'WhitelistInitialized(address,string)'(
      owner?: null,
      version?: null
    ): WhitelistInitializedEventFilter;
    WhitelistInitialized(
      owner?: null,
      version?: null
    ): WhitelistInitializedEventFilter;
  };

  estimateGas: {
    add(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    check(
      _sponsor: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkSponsorFunds(
      _sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFunds(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    parsePaymasterAndData(
      paymasterAndData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remove(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    senderNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sponsorFunds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whitelist(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addStake(
      unstakeDelaySec: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    check(
      _sponsor: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkSponsorFunds(
      _sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFunds(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parsePaymasterAndData(
      paymasterAndData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    postOp(
      mode: PromiseOrValue<BigNumberish>,
      context: PromiseOrValue<BytesLike>,
      actualGasCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeBatch(
      _accounts: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    senderNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sponsorFunds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      maxCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whitelist(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawStake(
      withdrawAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
