import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function LoadingScreen() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      const preloadImages = ['/static/earth/day.webp', '/static/earth/night.webp', '/static/earth/specularClouds.webp'];
      preloadImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    `,
        }}
      />
      <div className="h-screen w-full text-white flex just  ify-center items-center flex-col load">
        <Image
          src="/SPACE.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
          priority
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
    </>
  );
}
