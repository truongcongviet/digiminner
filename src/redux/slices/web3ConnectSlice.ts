import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type web3ConnectSliceType = {
  connector: any;
};

const initialData: web3ConnectSliceType = { connector: null };

const web3ConnectSlice = createSlice({
  name: "web3ConnectSlice",
  initialState: initialData,
  reducers: {
    setConnector(state, action: PayloadAction<web3ConnectSliceType>) {
      state.connector = action.payload.connector;
      return state;
    },
  },
});

const { actions, reducer } = web3ConnectSlice;
export const { setConnector } = actions;
export const web3ConnectSliceReducer = reducer;
export default web3ConnectSlice;
