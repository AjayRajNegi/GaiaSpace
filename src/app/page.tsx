"use client";
import Script from "next/script";
import TransitionLinks from "../components/TransitionLinks";

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
        {/* <Image
          src="/SPACE.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
          priority
          className="z-10"
        /> */}

        <div className="flex justify-center items-center flex-col">
          <div className="loader-container">
            <svg>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                textAnchor="middle"
                className="text-body text-[15vw] md:text-[10vw] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                GaiaSpace
              </text>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                dx="2.6em"
                textAnchor="middle"
                className="text-body text-[15vw] md:text-[10vw] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                .
              </text>
            </svg>
            <div className="hidden ">
              <TransitionLinks
                href="/home"
                prefetch={true}
                autoNavigate={true}
                delay={5000}
              >
                Home
              </TransitionLinks>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
