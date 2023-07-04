import { useState } from "react";

export function useInput(initVal) {
  const [value, setValue] = useState(initVal);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initVal)
  ];
}