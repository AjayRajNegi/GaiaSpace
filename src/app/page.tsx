"use client";
import Script from "next/script";
import TransitionLinks from "../components/TransitionLinks";

export default function LoadingScreen() {
  return (
    <>
      {/* <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          const preloadImages = [
            { src: '/static/earth/day.webp', crossorigin: 'anonymous' },
            { src: '/static/earth/night.webp', crossorigin: 'anonymous' },
            { src: '/static/earth/specularClouds.webp', crossorigin: 'anonymous' },
          ];
          preloadImages.forEach(({ src, crossorigin }) => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'image';
            link.href = src;
            link.crossOrigin = crossorigin;
            document.head.appendChild(link);
          });
        `,
        }}
      /> */}
      <div className="load flex h-screen w-full flex-col items-center justify-center text-white">
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

        <div className="flex flex-col items-center justify-center">
          <div className="loader-container">
            <svg>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                textAnchor="middle"
                className="text-body text-[15vw] tracking-[-2px] md:text-[10vw] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                GaiaSpace
              </text>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                dx="2.6em"
                textAnchor="middle"
                className="text-body text-[15vw] tracking-[-2px] md:text-[10vw] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                .
              </text>
            </svg>
            <div className="hidden">
              <TransitionLinks
                href="/home"
                prefetch={true}
                autoNavigate={true}
                delay={2000}
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
