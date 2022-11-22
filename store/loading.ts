import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  loadingState: boolean;
}

// Initial state
const initialState: AuthState = {
    loadingState: false,
};

// Actual Slice
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {

    // Action to set the authentication status
    setLoadState(state, action) {
      state.loadingState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.auth,
    //     };
    //   },
    // },

  },
});

export const { setLoadState } = loadingSlice.actions;

export const selectLoadingState = (state: AppState) => state.loading.loadingState;

export default loadingSlice.reducer;