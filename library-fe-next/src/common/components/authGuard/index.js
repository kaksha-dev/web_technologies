import { checkIsUserLoggedIn } from "@/utils/helpers";
import Link from "next/link";
import { useState } from "react";

function AuthGuard({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    if (checkIsUserLoggedIn()) {
      setIsUserLoggedIn(true);
    }
  }, []);

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
