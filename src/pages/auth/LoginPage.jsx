import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "react-toastify";
import api from "../../api";
import { loginAuthSchema } from "../../authSchema";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginAuthSchema),
  });
  const onSubmit = async (data) => {
    const res = await api.post("/login", data);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("accessToken", res.data.accessToken);
    toast.success("Đăng nhập thành công!");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 py-5 mx-auto my-16 border rounded-xl border-slate-400 w-md"
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input {...register("email")} type="email" className="form-control" />
          {errors.email && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
          />

          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <Link to={"/login"}>Do you have an account?</Link>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100">Login Now!</button>
        </div>
      </form>
    </>
  );
};
export default LoginPage;
