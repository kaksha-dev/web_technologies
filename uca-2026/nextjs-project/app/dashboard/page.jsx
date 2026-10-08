import Link from "next/link";

export default function Dashboard() {
  console.log("Dashbard page")
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Hello Dashboard
      </main>
      <Link href="/dashboard/graphs">Go to Graphs</Link>
    </div>
  );
}

// export function Sum() {
//   return "Hello sum"
// }

// export function subtract(a, b) {
//   return a - b;
// }
