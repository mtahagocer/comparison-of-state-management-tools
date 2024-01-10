// Redux setup with toolkit
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { FC, PropsWithChildren } from "react";
import { Provider, useSelector } from "react-redux";

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterIncrement: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
   counterIncrement,
    decrement,
    setCounter
   } = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;

export function useAppSelector<T>(selector: (state: RootState) => T): T {
  return useSelector(selector);
}

export const ReduxStoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
