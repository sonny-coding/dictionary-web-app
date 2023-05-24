import { useCallback, useState } from "react";

export function useToggle(initial = false) {
  // eslint-disable-next-line no-undef
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);
  return [state, toggle];
}
