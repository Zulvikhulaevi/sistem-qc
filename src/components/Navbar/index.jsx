import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const isAuthPage = () => {
    return router.pathname === "/auth/login";
  };

  const isRootPage = () => {
    return router.pathname === "/";
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <Link href={"/"} className="link ms-2">
          <Image
            src="/static/assets/logo.jpg"
            alt="logo"
            width={350}
            height={350}
          />
        </Link>
      </div>
      <div className="navbar-end">
        {!isAuthPage() && !isRootPage() && (
          <div className="me-4">
            {session ? (
              <button
                onClick={signOut}
                className="btn btn-sm btn-warning text-white hover:bg-yellow-400 hover:border-yellow-400">
                Sign Out
              </button>
            ) : (
              <Link
                href={"/"}
                className="btn btn-sm bg-emerald-600 text-white hover:bg-emerald-600">
                Sign In
              </Link>
            )}
          </div>
        )}
        {session
          ? isAuthPage() && (
              <button
                onClick={signOut}
                className="btn btn-sm btn-warning text-white hover:bg-yellow-400 hover:border-yellow-400">
                Sign Out
              </button>
            )
          : ""}
      </div>
    </div>
  );
};
export default Navbar;
