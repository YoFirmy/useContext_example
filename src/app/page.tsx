"use client";

import CounterButtons from "@/components/CounterButtons";
import CounterDisplay from "@/components/CounterDisplay";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="mb-8">Context Example</h1>
      <CounterDisplay counter={counter} />
      <CounterButtons
        onIncreaseClick={() => setCounter(counter + 1)}
        onDecreaseClick={() => setCounter(counter - 1)}
      />
    </main>
  );
}
