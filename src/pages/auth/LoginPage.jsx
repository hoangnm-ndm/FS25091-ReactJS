import { useState } from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };
  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            marginTop: 14,
          }}
        >
          Đăng nhập
        </button>
        <Link to="/auth/register">Đăng ký tại đây</Link>
      </form>
    </div>
  );
};

export default LoginPage;
