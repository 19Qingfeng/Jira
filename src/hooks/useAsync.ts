import { useState } from "react";

type StatusLits = "idle" | "loading" | "error" | "success";

interface State<D> {
  error: Error | null;
  data: D | null;
  status: StatusLits;
}

const initialState: State<null> = {
  data: null,
  error: null,
  status: "idle",
};

const useAsync = <D>(userState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...initialState,
    ...userState,
  });

  const setData = (data: D) => {
    setState({
      data,
      error: null,
      status: "success",
    });
    return data;
  };

  const setError = (error: Error) => {
    setState({
      data: null,
      error,
      status: "error",
    });
    return Promise.reject(error);
  };

  const setLoading = () => {
    setState({
      ...state,
      status: "loading",
    });
  };

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error(
        `run method in useAsync must be a Promise, please check your input.`
      );
    }
    setLoading();
    promise.then(setData).catch(setError);
  };

  return {
    isIdle: state.status === "idle",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    setData,
    setError,
    run,
    ...state,
  };
};

export { useAsync };
