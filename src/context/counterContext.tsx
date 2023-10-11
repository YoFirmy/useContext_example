"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

const CounterContext = createContext<{
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
} | null>(null);

const CounterProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider
      value={{ counter, increaseCounter, decreaseCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context)
    throw new Error("useCounter must be used within a CounterProvider");

  return context;
};

export { CounterProvider, useCounter };
