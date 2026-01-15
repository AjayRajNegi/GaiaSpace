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
    <div className="text-secondary p-5">
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex w-full gap-10 overflow-x-scroll"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="h-[300px] w-[800px] flex-shrink-0 bg-red-300" />
        <div className="h-[300px] w-[800px] flex-shrink-0 bg-red-300" />
        <div className="h-[300px] w-[800px] flex-shrink-0 bg-red-300" />
      </div>

      {isMounted && scrollContainerRef.current && (
        <CustomScrollbar scrollContainerRef={scrollContainerRef} />
      )}
    </div>
  );
}
