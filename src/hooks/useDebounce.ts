import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: any = 300) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
}

export { useDebounce };
