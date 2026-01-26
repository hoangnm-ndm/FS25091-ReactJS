import { useState } from "react";

// ? object props là 1 đối tượng chứa tất cả các properties của component.
function Button(props) {
  const [count, setCount] = useState([1, 2, 3]);
  const variants = {
    primary: {
      padding: "12px 32px",
      backgroundColor: "blue",
    },
    secondary: {
      padding: "12px 24px",
      backgroundColor: "#888",
      border: "1px solid #555",
    },
  };
  const increasement = () => {};
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {count}
      <button onClick={increasement} style={{ ...variants[props.variant] }}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
