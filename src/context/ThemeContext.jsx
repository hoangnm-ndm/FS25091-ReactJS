import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const data = "Hoang";
  const user = "Nam";

  const [count, setCount] = useState(0);
  return (
    <ThemeContext.Provider value={{ data, user, count, setCount }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
