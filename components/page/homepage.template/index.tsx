"use client";

import {
  HomeAbout,
  HomeIndustries,
  HomeTeam,
  HomeTestimoni,
} from "@/components/molecules";
import { HomeSlider } from "@/components/molecules/home-slider.molecule";
import { HomeBlog, HomePlan } from "@/components/organisms";
import { HomeCaseStudies } from "@/components/organisms/home-case-studies.organism";
import { HomeService } from "@/components/organisms/home-service.organism";

function HomePage() {
  return (
    <>
      <HomeSlider />
      <HomeTestimoni />
      <div className="flex flex-col gap-24">
        <div className="container mx-auto px-3 lg:px-4 xl:px-0">
          <HomeAbout />
        </div>
        <div className="container mx-auto px-3 lg:px-4 xl:px-0">
          <HomePlan />
        </div>
        <HomeService />
        <div className="container mx-auto px-3 lg:px-4 xl:px-0">
          <HomeIndustries />
        </div>
        <HomeCaseStudies />
        <div className="container mx-auto px-3 lg:px-4 xl:px-0">
          <HomeTeam />
        </div>
        {/* What Client Say */}
        <HomeBlog />
      </div>
    </>
  );
}

export { HomePage };
