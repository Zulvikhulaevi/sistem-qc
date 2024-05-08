import axios from "axios";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = {
      nik: form.nik.value,
      password: form.password.value,
    };

    const result = await axios.post("/api/auth/register", data);
    if (result.status === 200) {
      form.reset();
      push("/");
    } else {
      console.log("Register Failed");
    }
  };

  return (
    <div className="container min-w-full min-h-screen">
      <div className="container flex flex-col w-1/2 mx-auto mt-16 px-20">
        <h1 className="text-2xl font-bold text-center">REGISTER</h1>
        <div className="divider"></div>
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
              <span className="label-text font-semibold text-lg">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered"
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
