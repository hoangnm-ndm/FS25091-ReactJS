// ? object props là 1 đối tượng chứa tất cả các properties của component.
function Button(props) {
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
  return (
    <>
      <button style={{ ...variants[props.variant] }}>{props.children}</button>
    </>
  );
}

export default Button;
