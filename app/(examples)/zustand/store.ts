// Zustand setup
import { create } from "zustand";

const useCounterStore = create<{
  counter: number;

  increaseCounter: () => void;
}>((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useCounterStore;
