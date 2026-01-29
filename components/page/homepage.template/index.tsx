"use client";

import { HomeAbout, HomeIndustries } from "@/components/molecules";
import { HomeTeam } from "@/components/molecules/home-team.molecule";
import { HomePlan } from "@/components/organisms";

function HomePage() {
  return (
    <div className="container mx-auto px-2 lg:px-4 xl:px-0">
      <div className="flex flex-col gap-24">
        <HomeAbout />
        <HomePlan />
        {/* Our Service & Solution */}
        <HomeIndustries />
        {/* Case Studies */}
        <HomeTeam />
        {/* What Client Say */}
      </div>
    </div>
  );
}

export { HomePage };
