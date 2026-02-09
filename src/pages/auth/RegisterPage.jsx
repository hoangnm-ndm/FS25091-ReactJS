import axios from "axios";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";

const RegisterPage = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
          <input
            type="text"
            placeholder="Nhập email"
            {...register("email", { required: "Yêu cầu nhập Email" })}
          />
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
            type="password"
            placeholder="Nhap password"
            {...register("password", { required: "Yêu cầu nhập mật khẩu" })}
          />
        </div>
        <div>
          <label htmlFor="">Gioi tinh</label>
          <select name="" id="" {...register("gender", { required: true })}>
            <option value="">Chon gioi tinh</option>
            <option value="Male">Nam</option>
            <option value="Female">Nu</option>
            <option value="other">khac</option>
          </select>
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
