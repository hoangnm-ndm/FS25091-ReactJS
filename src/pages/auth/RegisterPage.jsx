import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import api from "../../api";
import { registerAuthSchema } from "../../authSchema";

const RegisterPage = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerAuthSchema),
  });
  const onSubmit = async (data) => {
    const res = await api.post("/register", data);
    toast.success("Đăng ký thành công, đăng nhập ngay!");
    nav("/login");
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
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            {...register("fullname")}
            type="text"
            className="form-control"
          />

          {errors.fullname && (
            <p className="text-danger">{errors.fullname?.message}</p>
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
          <button className="btn btn-primary w-100">Register Now!</button>
        </div>
      </form>
    </>
  );
};
export default RegisterPage;
