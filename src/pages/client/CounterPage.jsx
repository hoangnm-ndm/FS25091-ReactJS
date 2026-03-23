import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incement } from "../../store/counterAction";

const CounterPage = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Test Redux</h1>
      <h2>Count: {count}</h2>
      <button className="btn btn-primary" onClick={() => dispatch(incement(1))}>
        Tăng
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => dispatch(decrement(1))}
      >
        Giảm
      </button>{" "}
      <button
        className="btn btn-primary"
        onClick={() => dispatch(incement(10))}
      >
        Tăng 10
      </button>
    </div>
  );
};

export default CounterPage;
