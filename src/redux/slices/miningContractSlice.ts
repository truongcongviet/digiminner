import { ReactNode } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ethers } from "ethers";

export type miningContractSliceType = {
  contract: ethers.Contract | null;
  account: string;
};

const initialData: miningContractSliceType = { contract: null, account: "" };

const miningContractSlice = createSlice({
  name: "miningContract",
  initialState: initialData,
  reducers: {
    initMiningContract(state, action: PayloadAction<miningContractSliceType>) {
      return { ...state, contract: action.payload.contract };
    },
    resetMiningContract(state, action: PayloadAction<miningContractSliceType>) {
      return { contract: null, account: "" };
    },
  },
});

const { actions, reducer } = miningContractSlice;
export const { initMiningContract, resetMiningContract } = actions;
export const miningContractReducer = reducer;
export default miningContractSlice;
