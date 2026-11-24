import { useState } from 'react';

export default function Quantity() {
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={decrement} disabled={count === 1} className={`flex items-center justify-center w-10 h-10 border border-[#FFFFFF]/30 rounded-lg ${count === 1 ? 'bg-[#FFFFFF]/12' : 'bg-[#DC2D2D]'}`}>
        -
      </button>

      <div className="flex items-center justify-center w-21 h-10 border border-[#FFFFFF]/12 rounded-lg">{count}</div>

      <button onClick={increment} className="flex items-center justify-center w-10 h-10 border border-[#FFFFFF]/30 bg-[#82CC27] rounded-lg">
        +
      </button>
    </div>
  );
}
