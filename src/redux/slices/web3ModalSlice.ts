import { ReactNode } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type web3ModalSliceType = {
  isShow?: boolean;
  type:
    | "NOT_SUPPORT"
    | "WEB3_CONNECT"
    | "WRONG_NETWORK"
    | "INSTALL_METAMASK"
    | "MINT_MINER"
    | "TRANSACTION_ERROR"
    | "TRANSACTION_SUCCESS"
    |"TRANSCTION_LOADING"
    | "COMMON"
    | "NONE";
  title?: ReactNode;
  content?: ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
  footer?: ReactNode;
};

const initialData: web3ModalSliceType = { isShow: false, type: "NONE" };

const web3ModalSlice = createSlice({
  name: "web3Modal",
  initialState: initialData,
  reducers: {
    // increase(state, action) {
    //   state.count = state.count + 1;
    //   return state;
    // },
    openWeb3Modal(state, action: PayloadAction<web3ModalSliceType>) {
      const newState: web3ModalSliceType = {
        ...state, 
        ...action.payload, 
        isShow: true, 
      }
      return newState;
    },
    closeWeb3Modal(state) {
      return initialData;
    },
  },
});

const { actions, reducer } = web3ModalSlice;
export const { openWeb3Modal, closeWeb3Modal } = actions;
export const web3ModalSliceReducer = reducer;
export default web3ModalSlice;
