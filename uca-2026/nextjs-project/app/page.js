"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [hostname, setHostname] = useState("");
  useEffect(() => {
    console.log("Home page - Client side code", window?.location?.hostname);
  });
  console.log("Home page - Server side code");

  useEffect(() => {
    console.log("setting hostname in useEffect");
    (() => {
      setHostname(window?.location?.hostname);
    })();
  }, []);

  function getSlotData() {
    if (typeof window !== "undefined") {
      return hostname;
    } else {
      return "";
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Hello world!
      </main>
      {/* <div>{getSlotData()}</div> */}
      <div>
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
}
