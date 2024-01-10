/* eslint-disable react/display-name */
"use client";

import { memo, useRef } from "react";
import { CounterProvider, useCounterContext } from "./context";

const ContextExample = () => (
  <CounterProvider>
    <div className="container mx-auto flex w-full h-full min-h-screen justify-center items-center flex-col gap-y-10">
      <div className="text-center text-3xl">Context API</div>

      <div className="flex flex-row justify-center items-center gap-5">
        <CounterDisplay />

        <div className="divide-x-8 border-white"></div>

        <CounterSetter />
      </div>
    </div>
  </CounterProvider>
);

// Using context in components

const CounterDisplay = memo(() => {
  const { counter } = useCounterContext();

  return <div className="font-bold text-xl">Counter: {counter}</div>;
});

const CounterSetter = memo(() => {
  const { setCounter } = useCounterContext();

  const renderCount = useRef(0);

  renderCount.current++;

  const handleClick = () => {
    setCounter((prevCounter: number) => prevCounter + 1);
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
