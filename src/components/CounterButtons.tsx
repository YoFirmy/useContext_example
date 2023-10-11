import Button from "@/components/Button";

interface CounterButtonsProps {
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
}

export default function CounterButtons({
  onIncreaseClick,
  onDecreaseClick,
}: CounterButtonsProps) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <Button onClick={onIncreaseClick}>increase</Button>
      <Button onClick={onDecreaseClick}>decrease</Button>
    </div>
  );
}
