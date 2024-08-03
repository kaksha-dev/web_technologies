import useIsUserLoggedIn from "@/common/hooks/useIsUserLoggedIn";
import Link from "next/link";

function AuthGuard({ children }) {
  const isUserLoggedIn = useIsUserLoggedIn();

  return (
    <>
      {isUserLoggedIn ? (
        children
      ) : (
        <div>
          Please <Link href="/login">login</Link> first
        </div>
      )}
    </>
  );
}

export default AuthGuard;
