/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Crowdfactory, CrowdfactoryInterface } from "../Crowdfactory";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "projTitle",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "goalAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ownerWallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "projAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Projectcreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "projectTitle",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "projgoalAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "projDescript",
        type: "string",
      },
      {
        internalType: "address",
        name: "ownerWallet",
        type: "address",
      },
    ],
    name: "createProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "publishedProjs",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPublishedProjs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Crowdfactory__factory {
  static readonly abi = _abi;
  static createInterface(): CrowdfactoryInterface {
    return new utils.Interface(_abi) as CrowdfactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Crowdfactory {
    return new Contract(address, _abi, signerOrProvider) as Crowdfactory;
  }
}
