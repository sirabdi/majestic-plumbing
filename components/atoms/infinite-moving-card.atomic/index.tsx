"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: React.ReactElement[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );

    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
    );
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative overflow-hidden", className)}
    >
      <ul
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-18 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
