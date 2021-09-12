import { useState } from "react";

function useArray<T>(initialArray: T[]) {
  const [value, setValue] = useState(initialArray);

  const clear = () => {
    setValue([]);
  };

  const removeIndex = (index: number) => {
    const copyValue = [...value];
    copyValue.splice(index, 1);
    setValue(copyValue);
  };

  const add = (item: T) => {
    setValue([...value, item]);
  };

  return {
    value,
    setValue,
    clear,
    removeIndex,
    add,
  };
}

export { useArray };
