import Link from "next/link";
export default function LoadingScreen() {
  return (
    <div className="h-screen w-full bg-slate-200 flex justify-center items-center flex-col">
      <h1 className="font-bold text-6xl">LOADING PAGE</h1>
      <Link href="/home" prefetch={true}>
        <h3 className="font-semibold text-3xl border-2 border-solid rounded-md border-black px-4 py-2 my-4">
          Home
        </h3>
      </Link>
    </div>
  );
}
