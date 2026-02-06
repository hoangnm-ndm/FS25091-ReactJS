import AdminLayout from "../components/layouts/AdminLayout";
import PrivateRoute from "../components/protected/PrivateRoute";
import Dashboard from "../pages/admin/Dashboard";

export const AdminRoutes = [
  {
    path: "/admin",
    element: (
      <PrivateRoute isAuth roles={["admin"]}>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];
