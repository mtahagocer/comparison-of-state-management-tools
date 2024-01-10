/* eslint-disable react/display-name */
"use client";

import { memo, useRef } from "react";
import useCounterStore from "./store";

const ContextExample = () => (
  <div className="container mx-auto flex w-full h-full min-h-screen justify-center items-center flex-col gap-y-10">
    <div className="text-center text-3xl">Zustand</div>

    <div className="flex flex-row justify-center items-center gap-5">
      <CounterDisplay />

      <div className="divide-x-8 border-white"></div>

      <CounterSetter />
    </div>
  </div>
);

// Using zustand in components

const CounterDisplay = memo(() => {
  const counter = useCounterStore((s) => s.counter);

  return <div className="font-bold text-xl">Counter: {counter}</div>;
});

const CounterSetter = memo(() => {
  const renderCount = useRef(0);

  // EXAMPLE_1
  // const increaseCounter = useCounterStore((s) => s.increaseCounter);

  renderCount.current++;

  const handleClick = () => {
    // EXAMPLE_2
    useCounterStore.setState((state) => ({
      ...state,
      counter: state.counter + 1,
    }));

    // EXAMPLE_3

    // useCounterStore.getState().increaseCounter();
  };

  return (
    <div className="flex items-center gap-5">
      <button
        className="bg-slate-200 text-black p-3 rounded-lg text-l"
        onClick={handleClick}
      >
        Increment Counter
      </button>

      <div className="font-bold text-xl">
        CounterSetter rendered {renderCount.current} times
      </div>
    </div>
  );
});

export default ContextExample;
