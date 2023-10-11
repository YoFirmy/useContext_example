"use client";

import { useCounter } from "@/context/counterContext";

export default function CounterDisplay() {
  const { counter } = useCounter();

  return <p>{counter}</p>;
}
