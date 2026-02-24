"use client";

import { useRef, useEffect, useState } from "react";
import { CustomScrollbar } from "./CustomScrollbar";

export function Roadmap() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-secondary mx-auto my-30 max-w-7xl px-1 md:my-[150px] xl:px-0">
      <h2 className="md:text-h2 mb-2 text-[42px] font-[300] md:mb-10">
        Roadmap
      </h2>
      <div className="relative">
        {/* Fade overlays */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-4 bg-gradient-to-r from-black to-transparent sm:w-16 md:w-32" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-4 bg-gradient-to-l from-black to-transparent sm:w-16 md:w-32" />

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full gap-4 overflow-x-scroll md:gap-10"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* 001 */}
          <div className="h-auto w-[88vw] flex-shrink-0 sm:w-[600px] md:h-[310px] md:w-[760px]">
            <div className="flex flex-col items-end gap-2 sm:flex-row md:gap-8">
              <img
                src="/images/home/Roadmap01.avif"
                className="h-auto w-full rounded-md object-cover sm:h-[280px] sm:w-[500px]"
                alt=""
              />
              <p className="text-secondary bg-highlight h-fit w-fit p-3 text-xs leading-[17px] font-[300] tracking-tighter text-balance sm:text-sm">
                Even before GAIA SPACE was officially established, our team was
                engaged in small-scale experiments with various hybrid rocket
                fuels. These early tests. dating back to late 2019, served as
                the spark that ignited the passion and vision now driven forward
                by a dedicated team of experienced professionals and educators-
              </p>
            </div>
            <div className="mt-2 flex justify-between text-sm font-[300] md:text-base">
              <span>{"> GS_001"}</span>
              <span>2019</span>
            </div>
          </div>
          {/* 002 */}
          <div className="h-auto w-[88vw] flex-shrink-0 sm:w-[600px] md:h-[310px] md:w-[760px]">
            <div className="flex flex-col items-end gap-2 sm:flex-row md:gap-8">
              <img
                src="/images/home/Roadmap01.avif"
                className="h-auto w-full rounded-md object-cover sm:h-[280px] sm:w-[500px]"
                alt=""
              />
              <p className="text-secondary bg-highlight h-fit w-fit p-3 text-xs leading-[17px] font-[300] tracking-tighter text-balance sm:text-sm">
                Even before GAIA SPACE was officially established, our team was
                engaged in small-scale experiments with various hybrid rocket
                fuels. These early tests. dating back to late 2019, served as
                the spark that ignited the passion and vision now driven forward
                by a dedicated team of experienced professionals and educators-
              </p>
            </div>
            <div className="mt-2 flex justify-between text-sm font-[300] md:text-base">
              <span>{"> GS_001"}</span>
              <span>2019</span>
            </div>
          </div>
          {/* 003 */}
          <div className="mr-4 h-auto w-[88vw] flex-shrink-0 sm:w-[600px] md:mr-10 md:h-[310px] md:w-[760px]">
            <div className="flex flex-col items-end gap-2 sm:flex-row md:gap-8">
              <img
                src="/images/home/Roadmap01.avif"
                className="h-auto w-full rounded-md object-cover sm:h-[280px] sm:w-[500px]"
                alt=""
              />
              <p className="text-secondary bg-highlight h-fit w-fit p-3 text-xs leading-[17px] font-[300] tracking-tighter text-balance sm:text-sm">
                Even before GAIA SPACE was officially established, our team was
                engaged in small-scale experiments with various hybrid rocket
                fuels. These early tests. dating back to late 2019, served as
                the spark that ignited the passion and vision now driven forward
                by a dedicated team of experienced professionals and educators-
              </p>
            </div>
            <div className="mt-2 flex justify-between text-sm font-[300] md:text-base">
              <span>{"> GS_001"}</span>
              <span>2019</span>
            </div>
          </div>
        </div>
      </div>

      {isMounted && scrollContainerRef.current && (
        <CustomScrollbar scrollContainerRef={scrollContainerRef} />
      )}
    </div>
  );
}
