import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;   // ✅ mutate only
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;   // ✅ mutate only
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;  // ✅ mutate only
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;
