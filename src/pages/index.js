import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { push, query } = useRouter();
  const { data: session } = useSession();

  const callbackUrl = query.callbackUrl || "/qcsys";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const response = await signIn("credentials", {
        redirect: false,
        nik: form.nik.value,
        password: form.password.value,
        callbackUrl,
      });
      if (!response?.error) {
        form.reset();
        push(callbackUrl);
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className="container flex justify-center min-w-full min-h-screen">
      <div className="container flex flex-col w-1/3 mt-16">
        <h1 className="text-2xl font-bold text-center">LOGIN</h1>
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
          <div>
            <button
              type="submit"
              className={
                !session ? `btn btn-primary w-full` : `btn btn-primary w-full`
              }>
              LOGIN
            </button>
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
}
