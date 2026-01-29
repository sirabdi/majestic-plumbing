"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import clsx from "clsx";

type ImageResolverProps = ImageProps & {
  skeletonClassName?: string;
};

export function ImageResolver({
  className,
  skeletonClassName,
  ...props
}: ImageResolverProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0">
      {/* Skeleton (loading OR error) */}
      {(!loaded || hasError) && (
        <div
          className={clsx(
            "absolute inset-0 animate-pulse bg-gray-200",
            skeletonClassName,
          )}
        />
      )}

      {/* Image (hide if error) */}
      {!hasError && (
        <Image
          {...props}
          className={clsx(
            "transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
          onLoadingComplete={() => setLoaded(true)}
          onError={() => {
            setHasError(true);
            setLoaded(false);
          }}
        />
      )}
    </div>
  );
}
