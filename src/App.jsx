import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
          <ToastContainer />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
