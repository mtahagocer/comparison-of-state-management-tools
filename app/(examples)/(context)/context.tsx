// Context creation

import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const CounterContext = createContext<{
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}>({
  counter: 0,
  setCounter: () => {},
});

export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
