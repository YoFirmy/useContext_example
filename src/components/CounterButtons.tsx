"use client";

import Button from "@/components/Button";
import { useCounter } from "@/context/counterContext";

export default function CounterButtons() {
  const { increaseCounter, decreaseCounter } = useCounter();

  return (
    <div className="p-4 flex flex-col gap-2">
      <Button onClick={increaseCounter}>increase</Button>
      <Button onClick={decreaseCounter}>decrease</Button>
    </div>
  );
}
