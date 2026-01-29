"use client";

import { HomeAboutMolecule } from "@/components/molecules";
import { HomePlanMolecule } from "@/components/organisms";

function HomePage() {
  return (
    <div className="container mx-auto px-2 lg:px-4 xl:px-0">
      <div className="flex flex-col gap-24">
        <HomeAboutMolecule />
        <HomePlanMolecule />
      </div>
    </div>
  );
}

export { HomePage };
