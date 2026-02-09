import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";
import z from "zod";
import { da } from "zod/locales";

const registerSchema = z
  .object({
    email: z.email("Email không hợp lệ"),
    password: z.string().min(6, "Yêu cầu trên 6 ký tự"),
    gender: z.string().min(1, "Vui lòng chọn giới tính"),
    confirmPassword: z.string().min(6, "Yêu cầu trên 6 ký tự"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ["confirmPassword"],
    message: "Mật khẩu xác nhận không giống",
  });

const RegisterPage = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://api-class-o1lo.onrender.com/api/quoclc/auth/register",
        data,
      );
      alert("Dang ky thanh cong");
      nav("/auth/login");
    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message);
    }
  };
  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Nhập email" {...register("email")} />
          {errors.email && (
            <p style={{ color: "red", margin: 0 }}>{errors?.email?.message}</p>
          )}
        </div>
        <div
          className="form-field"
          style={{
            marginTop: 8,
          }}
        >
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Nhap password"
            {...register("password")}
          />
          {errors.password && (
            <p style={{ color: "red", margin: 0 }}>
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div
          className="form-field"
          style={{
            marginTop: 8,
          }}
        >
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            placeholder="Nhap password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red", margin: 0 }}>
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="">Gioi tinh</label>
          <select name="" id="" {...register("gender")}>
            <option value="">Chon gioi tinh</option>
            <option value="Male">Nam</option>
            <option value="Female">Nu</option>
            <option value="other">khac</option>
          </select>
          {errors.gender && (
            <p style={{ color: "red", margin: 0 }}>{errors?.gender?.message}</p>
          )}
        </div>
        <button
          style={{
            marginTop: 14,
          }}
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
