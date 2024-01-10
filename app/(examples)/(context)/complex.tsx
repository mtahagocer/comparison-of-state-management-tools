import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

const MultiStateContext = createContext<{
  state1: string;
  setState1: React.Dispatch<React.SetStateAction<string>>;
  state2: string;
  setState2: React.Dispatch<React.SetStateAction<string>>;
  state3: string;
  setState3: React.Dispatch<React.SetStateAction<string>>;
  state4: string;
  setState4: React.Dispatch<React.SetStateAction<string>>;
  state5: string;
  setState5: React.Dispatch<React.SetStateAction<string>>;
}>({
  state1: "",
  setState1: () => {},
  state2: "",
  setState2: () => {},
  state3: "",
  setState3: () => {},
  state4: "",
  setState4: () => {},
  state5: "",
  setState5: () => {},
});

export const MultiStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state1, setState1] = useState("Initial State 1");
  const [state2, setState2] = useState("Initial State 2");
  const [state3, setState3] = useState("Initial State 3");
  const [state4, setState4] = useState("Initial State 4");
  const [state5, setState5] = useState("Initial State 5");

  return (
    <MultiStateContext.Provider
      value={{
        state1,
        setState1,
        state2,
        setState2,
        state3,
        setState3,
        state4,
        setState4,
        state5,
        setState5,
      }}
    >
      {children}
    </MultiStateContext.Provider>
  );
};

export const useMultiState = () => useContext(MultiStateContext);

export const MultiStateComponent = () => {
  const {
    state1,
    setState1,
    state2,
    setState2,
    state3,
    setState3,

    state4, // NOT USED IN UI

    setState4,
    state5,
    setState5,
  } = useMultiState();

  // Update states with new values
  const handleUpdate = () => {
    setState1("Updated State 1");
    setState2("Updated State 2");
    setState3("Updated State 3");
    setState4("Updated State 4");

    if (state4) setState5("Updated State 5");
  };

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
