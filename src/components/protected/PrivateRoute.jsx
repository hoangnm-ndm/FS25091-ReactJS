import { Navigate } from "react-router";

// Lưu ý đây là fake ra dữ liệu người dùng từ local Storage
const user = {
  name: "Quoc",
  role: "admin",
};
const PrivateRoute = ({ children, isAuth, roles }) => {
  const userData = user;
  if (roles && isAuth)
    return roles.includes(userData.role) && isAuth ? (
      children
    ) : (
      <Navigate to={"/"} />
    );
};

export default PrivateRoute;
