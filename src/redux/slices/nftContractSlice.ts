import { ReactNode } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ethers } from "ethers";

export type nftContractSliceType = {
  contract: ethers.Contract | null,
  account: string
};

const initialData: nftContractSliceType = { contract: null, account: "" };

const nftContractSlice = createSlice({
  name: "nftContract",
  initialState: initialData,
  reducers: {
    initNftContract(state, action: PayloadAction<nftContractSliceType>) {
      return {...state, contract: action.payload.contract}
    },
    resetNftContract(state, action:  PayloadAction<nftContractSliceType>){
      return {contract: null, account: ""}
    }
  },
});

const { actions, reducer } = nftContractSlice;
export const { initNftContract, resetNftContract } = actions;
export const nftContractReducer = reducer;
export default nftContractSlice;
