import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Spinner from "./Spinner";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {promiseInProgress === true ? (
        <Spinner />
      ) : (
        ""
      )}
    </div>
  );
};

export default LoadingIndicator;
