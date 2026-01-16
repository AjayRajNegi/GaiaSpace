"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, Draggable, ScrollToPlugin);

export function CustomScrollbar({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null> | null;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable>(null);

  const updateScrollerPosition = useCallback(() => {
    const container = scrollContainerRef?.current;
    const scroller = scrollerRef.current;
    const draggable = draggableRef.current;

    if (!container || !scroller || !draggable) return;

    const containerScrollLeft = container.scrollLeft;
    const maxContainerScroll = container.scrollWidth - container.clientWidth;
    const maxDraggableX = draggable.maxX;

    if (maxContainerScroll > 0 && maxDraggableX > 0) {
      const progress = containerScrollLeft / maxContainerScroll;
      const newX = progress * maxDraggableX;

      gsap.set(scroller, { x: newX });
    }
  }, [scrollContainerRef]);

  useGSAP(
    () => {
      const container = scrollContainerRef?.current;
      const scroller = scrollerRef.current;
      const track = trackRef.current;

      if (!container || !scroller || !track) return;

      const instance = Draggable.create(scroller, {
        type: "x",
        bounds: track,
        onDrag() {
          const progress = this.x / this.maxX;
          const maxScroll = container.scrollWidth - container.clientWidth;

          gsap.to(container, {
            scrollTo: { x: maxScroll * progress },
            duration: 0.0,
            overwrite: true,
          });
        },
        onDragEnd() {
          gsap.to(container, {
            scrollTo: {
              x:
                (this.x / this.maxX) *
                (container.scrollWidth - container.clientWidth),
            },
            duration: 0.2,
            ease: "power2.out",
          });
        },
      })[0];

      draggableRef.current = instance;

      updateScrollerPosition();

      const handleContainerScroll = () => {
        updateScrollerPosition();
      };

      container.addEventListener("scroll", handleContainerScroll);

      const handleResize = () => {
        instance.update();
        updateScrollerPosition();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        instance.kill();
        container.removeEventListener("scroll", handleContainerScroll);
        window.removeEventListener("resize", handleResize);
      };
    },
    {
      dependencies: [scrollContainerRef, updateScrollerPosition],
      revertOnUpdate: true,
    },
  );

  return (
    <div className="py-10">
      <div
        ref={trackRef}
        className="relative mx-auto flex h-[.5] w-full justify-between rounded-full bg-gray-700"
      >
        <div
          ref={scrollerRef}
          className="bg-primary absolute -top-1 left-0 h-3 w-3 cursor-pointer rounded-full shadow-[0px_0px_212px_1px_rgba(111,203,255,1)] ring-2 ring-white"
        />
        <div className="bg-highlight absolute -top-3 left-5 h-2 w-2 rounded-full" />
        <div className="bg-highlight absolute -top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" />
        <div className="bg-highlight absolute -top-3 right-5 h-2 w-2 rounded-full" />
        <div>year 1</div>
        <div>year 2</div>
        <div>year 3</div>
      </div>
    </div>
  );
}
