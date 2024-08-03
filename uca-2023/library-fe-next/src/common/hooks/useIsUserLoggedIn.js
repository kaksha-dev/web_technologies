import { checkIsUserLoggedIn } from "@/utils/helpers";
import { useEffect, useState } from "react";

function useIsUserLoggedIn() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (checkIsUserLoggedIn()) {
      setIsUserLoggedIn(true);
    }
  }, []);
  return isUserLoggedIn;
}
export default useIsUserLoggedIn;
