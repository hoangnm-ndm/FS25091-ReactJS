import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const HomePage = () => {
  const { setCount, count, user } = useContext(ThemeContext);
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
      <p>{user}</p>
    </div>
  );
};

export default HomePage;
