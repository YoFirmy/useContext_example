import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="border-2 p-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
}
