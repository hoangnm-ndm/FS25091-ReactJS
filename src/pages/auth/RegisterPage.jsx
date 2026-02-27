import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAuth } from "../../api/auth";
import { useNavigate } from "react-router";

const registerSchema = z.object({
  email: z.string().email("Email không đúng định dạng"),
  password: z.string().min(6, "Password tối thiểu 6 ký tự"),
  confirmPass: z.string().min(6, "Confirm Password tối thiểu 6 ký tự"),
  gender: z.string(),
});

const RegisterPage = () => {
  const nav = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await registerAuth({ ...data, confirmPass: undefined });
      // Bao thanh cong!
      // if (res.data.accessToken) {
      //   nav("/login");
      // } else {
      //   reset(), console.log(res.data);
      // }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register now!</h1>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email?.message && (
          <p className="text-danger">{errors.email?.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        />
        {errors.password?.message && (
          <p className="text-danger">{errors.password?.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("confirmPass", { required: true })}
        />
        {errors.confirmPass?.message && (
          <p className="text-danger">{errors.confirmPass?.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="genger" className="form-label">
          Gender
        </label>
        <select
          name=""
          id=""
          className="form-control"
          {...register("gender", { required: true })}
        >
          <option value="" key="0">
            Chọn giới tính
          </option>
          <option value="male" key="1">
            Male
          </option>
          <option value="female" key="2">
            Female
          </option>
          <option value="other" key="3">
            Other
          </option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary w-100">Register</button>
      </div>
    </form>
  );
};

export default RegisterPage;
