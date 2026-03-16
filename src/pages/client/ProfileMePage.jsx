import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfileMePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      ProfileMePage
      {user && <p>{user.email}</p>}
      {/* Trang thông tin cá nhân dựa vào context */}
    </div>
  );
};

export default ProfileMePage;
