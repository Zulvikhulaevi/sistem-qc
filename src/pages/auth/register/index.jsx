import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterPage = () => {
  const { push } = useRouter();
  const [registerMessage, setRegisterMessage] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      nik: form.nik.value,
      password: form.password.value,
    };

    if (confirmPassword === data.password) {
      try {
        const result = await axios.post("/api/auth/register", data);
        if (result.status === 200) {
          form.reset();
          setRegisterSuccess(true);
          push("/auth/login");
          setRegisterMessage("");
        } else {
          setRegisterMessage("NIK Tidak Terdaftar!");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setRegisterMessage("NIK Tidak Terdaftar!");
        }
      }
    } else {
      setRegisterMessage("Konfirmasi Password Tidak Cocok!");
    }
  };

  return (
    <div className="container min-w-full min-h-screen">
      <div className="container flex flex-col w-1/2 mx-auto mt-16 px-20">
        <h1 className="text-2xl font-bold text-center">REGISTER</h1>
        <hr className="mt-3" />
        {registerMessage && (
          <h3 className="text-center text-error mt-2 underline">
            {registerMessage}
          </h3>
        )}
        {registerSuccess && (
          <h3 className="text-center text-emerald-500 mt-2 underline">
            Register Berhasil!
          </h3>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg">NIK</span>
            </label>
            <input
              type="number"
              name="nik"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Password Baru
              </span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Konfirmasi Password
              </span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="divider"></div>
          <button type="submit" className="btn btn-primary w-full">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
