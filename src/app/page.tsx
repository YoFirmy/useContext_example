import CounterButtons from "@/components/CounterButtons";
import CounterDisplay from "@/components/CounterDisplay";
import { CounterProvider } from "@/context/counterContext";

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="mb-8">Context Example</h1>
      <CounterProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>
    </main>
  );
}
