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
    <div className="text-secondary mx-auto my-[150px] max-w-7xl">
      <h2 className="text-h2 mb-10 font-[300]">Roadmap</h2>
      <div className="relative">
        {/* Fade overlays */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full gap-10 overflow-x-scroll"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* 001 */}
          <div className="h-[310px] w-[760px] flex-shrink-0">
            <div className="flex items-end gap-8">
              <img
                src="/images/home/Roadmap01.avif"
                className="h-[280] w-[500] rounded-md"
                alt=""
              />
              <p className="text-secondary bg-highlight h-fit w-fit p-3 text-sm leading-[17px] font-[300] tracking-tighter text-balance">
                Even before GAIA SPACE was officially established, our team was
                engaged in small-scale experiments with various hybrid rocket
                fuels. These early tests. dating back to late 2019, served as
                the spark that ignited the passion and vision now driven forward
                by a dedicated team of experienced professionals and educators-
              </p>
            </div>
            <div className="mt-2 flex justify-between text-base font-[300]">
              <span>{"> GS_001"}</span>
              <span>2019</span>
            </div>
          </div>
          {/* 002 */}
          <div className="h-[310px] w-[760px] flex-shrink-0">
            <div className="flex items-end gap-8">
              <img
                src="/images/home/Roadmap01.avif"
                className="h-[280] w-[500] rounded-md"
                alt=""
              />
              <p className="text-secondary bg-highlight h-fit w-fit p-3 text-sm leading-[17px] font-[300] tracking-tighter text-balance">
                Even before GAIA SPACE was officially established, our team was
                engaged in small-scale experiments with various hybrid rocket
                fuels. These early tests. dating back to late 2019, served as
                the spark that ignited the passion and vision now driven forward
                by a dedicated team of experienced professionals and educators-
              </p>
            </div>
            <div className="mt-2 flex justify-between text-base font-[300]">
              <span>{"> GS_001"}</span>
              <span>2019</span>
            </div>
          </div>
          {/* 003 */}
          <div className="mr-10 h-[310px] w-[760px] flex-shrink-0">
            <div className="flex items-end gap-8">
              <img
                src="/images/home/Roadmap01.avif"
                className="h-[280] w-[500] rounded-md"
                alt=""
              />
              <p className="text-secondary bg-highlight h-fit w-fit p-3 text-sm leading-[17px] font-[300] tracking-tighter text-balance">
                Even before GAIA SPACE was officially established, our team was
                engaged in small-scale experiments with various hybrid rocket
                fuels. These early tests. dating back to late 2019, served as
                the spark that ignited the passion and vision now driven forward
                by a dedicated team of experienced professionals and educators-
              </p>
            </div>
            <div className="mt-2 flex justify-between text-base font-[300]">
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
