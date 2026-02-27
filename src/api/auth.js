import api from ".";

export const registerAuth = async (data) => {
  const res = await api.post("/register", data);
  return res;
};

export const loginAuth = async (data) => {
  const res = await api.post("/auth/login", data);
  return res;
};
