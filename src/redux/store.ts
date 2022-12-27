import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { demoReducer } from "./slices/demoSlice";
import { web3ModalSliceReducer } from "./slices/web3ModalSlice";
import { web3ConnectSliceReducer } from "./slices/web3ConnectSlice";
import { nftContractReducer } from "./slices/nftContractSlice";
import { miningContractReducer } from "./slices/miningContractSlice";

const store = configureStore({
  reducer: {
    demo: demoReducer,
    web3Modal: web3ModalSliceReducer,
    web3Connector: web3ConnectSliceReducer,
    nftContract: nftContractReducer,
    miningContract: miningContractReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
