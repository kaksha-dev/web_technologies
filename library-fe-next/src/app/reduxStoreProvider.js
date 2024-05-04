"use client";

import { makeStore } from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function ReduxStoreProvider({ children }) {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
