import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterPage = () => {
  const { count } = useSelector((state) => state.counter);
  // state: {
  //   counter: {},
  //   auth: {},
  //   cart: {},
  // }
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Test Redux</h1>
      <h2>Count: {count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "counter/increment" })}
      >
        Tăng
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "counter/decrement" })}
      >
        Giảm
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "counter/increment", payload: 10 })}
      >
        Tăng 10
      </button>
    </div>
  );
};

export default CounterPage;
