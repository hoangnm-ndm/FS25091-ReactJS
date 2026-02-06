import React from "react";
import { useLocation, useSearchParams } from "react-router";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  console.log(Object.fromEntries(searchParams.entries()));
  return (
    <div>
      Trang quan tri {searchParams.get("q")} {searchParams.get("key")}
    </div>
  );
};

export default Dashboard;
