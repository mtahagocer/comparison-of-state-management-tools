/* eslint-disable react/display-name */
"use client";

import { memo, useRef } from "react";
import { ReduxStoreProvider, counterIncrement, useAppSelector } from "./store";
import { useDispatch } from "react-redux";

const ContextExample = () => (
  <ReduxStoreProvider>
    <div className="container mx-auto flex w-full h-full min-h-screen justify-center items-center flex-col gap-y-10">
      <div className="text-center text-3xl">Redux Tool Kit</div>

      <div className="flex flex-row justify-center items-center gap-5">
        <CounterDisplay />

        <div className="divide-x-8 border-white"></div>

        <CounterSetter />
      </div>
    </div>
  </ReduxStoreProvider>
);

// Using context in components

const CounterDisplay = memo(() => {
  const counter = useAppSelector((s) => s.counter);

  return <div className="font-bold text-xl">Counter: {counter}</div>;
});

const CounterSetter = memo(() => {
  const renderCount = useRef(0);

  const dispatch = useDispatch();

  renderCount.current++;

  const handleClick = () => {
    // Worst practice
    dispatch(counterIncrement());

    // Best practice
    // store.dispatch(counterIncrement());

    // Better - firing action automatically
    // counterIncrement()
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
