import { Outlet } from "react-router";
import Header from "../Header";

const ClientLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children ? children : <Outlet />}</main>
    </>
  );
};

export default ClientLayout;
