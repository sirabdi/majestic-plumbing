"use client";

import { HomeAbout, HomeIndustries, HomeTeam } from "@/components/molecules";
import { HomeBlog, HomePlan } from "@/components/organisms";

function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <div className="container mx-auto px-3 lg:px-4 xl:px-0">
        <HomeAbout />
      </div>
      <div className="container mx-auto px-3 lg:px-4 xl:px-0">
        <HomePlan />
      </div>
      {/* Our Service & Solution */}
      <div className="container mx-auto px-3 lg:px-4 xl:px-0">
        <HomeIndustries />
      </div>
      {/* Case Studies */}
      <div className="container mx-auto px-3 lg:px-4 xl:px-0">
        <HomeTeam />
      </div>
      {/* What Client Say */}
      <HomeBlog />
    </div>
  );
}

export { HomePage };
