import { useEffect } from "react";
import { create } from "zustand";

export interface IState {
  state1: string;
  state2: string;
  state3: string;
  state4: string;
  state5: string;
}

const initialState: IState = {
  state1: "Initial State 1",
  state2: "Initial State 2",
  state3: "Initial State 3",
  state4: "Initial State 4",
  state5: "Initial State 5",
};

export interface IActions {
  clearState: () => void;
}

const useMultiStateStore = create<IState & IActions>((set) => ({
  ...initialState,
  clearState: () => set(initialState),
}));

export default useMultiStateStore;

export const MultiStateComponent = () => {
  const { state1, state2, state3, state5 } = useMultiStateStore((s) => ({
    state1: s.state1,
    state2: s.state2,
    state3: s.state3,
    state5: s.state5,
  }));

  // Update states with new values using partial setState
  const handleUpdate = () => {
    useMultiStateStore.setState((s) => ({
      state1: "Updated State 1",
      state2: "Updated State 2",
      state3: "Updated State 3",
      state4: "Updated State 4",
      state5: s.state4 ? "Updated State 5" : s.state5,
    }));
  };

  useEffect(() => () => useMultiStateStore.getState().clearState(), []);

  return (
    <div>
      <p>State 1: {state1}</p>
      <p>State 2: {state2}</p>
      <p>State 3: {state3}</p>
      <p>State 5: {state5}</p>
      <button onClick={handleUpdate}>Update States</button>
    </div>
  );
};
