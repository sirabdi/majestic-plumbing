"use client";

import { ImageResolver } from "@/components/atoms";
import { InfiniteMovingCards } from "@/components/atoms/infinite-moving-card.atomic";

function HomeTestimoni() {
  const resolverImage = (url: string) => {
    return (
      <div className="relative w-[171.11px] h-[77px] rounded overflow-hidden">
        <ImageResolver
          fill
          src={url}
          alt="Majestic Plumbing - Testimonial"
          skeletonClassName="rounded"
          className="object-contain rounded"
        />
      </div>
    );
  };

  const testimonials = [
    resolverImage("/images/testimoni/testimoni-1.webp"),
    resolverImage("/images/testimoni/testimoni-2.webp"),
    resolverImage("/images/testimoni/testimoni-3.webp"),
    resolverImage("/images/testimoni/testimoni-4.webp"),
    resolverImage("/images/testimoni/testimoni-5.webp"),
    resolverImage("/images/testimoni/testimoni-6.webp"),
  ];

  return (
    <div className="flex items-center gap-12 md:gap-16 h-40 md:h-[297px]">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

export { HomeTestimoni };
