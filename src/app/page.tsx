import CounterButtons from "@/components/CounterButtons";
import CounterDisplay from "@/components/CounterDisplay";
import Heading from "@/components/Heading";
import { CounterProvider } from "@/context/counterContext";

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center">
      <CounterProvider>
        <Heading />
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>
    </main>
  );
}
