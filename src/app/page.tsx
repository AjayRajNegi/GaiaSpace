import Link from "next/link";
import Image from "next/image";
export default function LoadingScreen() {
  return (
    <div className="h-screen w-full text-white flex justify-center items-center flex-col">
      <Image
        src="/SPACE.png"
        alt="Background"
        layout="fill" // Fills the container
        objectFit="cover" // Ensures it covers the area of the div
        objectPosition="center" // Centers the image
      />
      <div className="z-10 flex justify-center items-center flex-col">
        <h1 className="font-bold text-6xl text-white">LOADING PAGE</h1>
        <Link href="/home" prefetch={true}>
          <h3 className="font-semibold text-3xl border-2 border-solid rounded-md border-black px-4 py-2 my-4">
            Home
          </h3>
        </Link>
      </div>
    </div>
  );
}
