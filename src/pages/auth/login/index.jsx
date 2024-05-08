import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useAllStateContext } from "@/context/AllStateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const { isValueError, setIsValueError, isBtnLoading, setIsBtnLoading } =
    useAllStateContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      setIsBtnLoading(true);
      const response = await signIn("credentials", {
        redirect: false,
        nik: form.nik.value,
        password: form.password.value,
      });
      if (!response?.error) {
        form.reset();
        push("/qcsys");
        setIsBtnLoading(false);
        setIsValueError(false);
      } else {
        setIsBtnLoading(false);
        setIsValueError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex justify-center min-w-full min-h-screen">
      <div className="container flex flex-col w-1/3 mt-16">
        <h1 className="text-2xl font-bold text-center">LOGIN</h1>
        <div className="divider"></div>
        {isValueError ? (
          <p className="text-center text-error mb-3">
            NIK atau Password salah!
          </p>
        ) : (
          ""
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
          <div className="flex justify-end">
            {!session ? (
              <button type="submit" className="btn btn-primary w-full">
                {isBtnLoading ? (
                  <div className="flex items-center">
                    <span className="loading loading-spinner me-2"></span>
                    Loading...
                  </div>
                ) : (
                  "LOGIN"
                )}
              </button>
            ) : (
              <Link
                href={"/qcsys"}
                className="btn
                bg-gray-300
                w-full">
                Dashboard
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="mt-0.5"
                />
              </Link>
            )}
          </div>
        </form>
        <p className="mt-3">
          <Link href={"/auth/register"} className="link text-primary">
            Buat Akun!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
