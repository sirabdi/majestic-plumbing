"use client";

import {
  Button,
  Card,
  ImageResolver,
  List,
  Paragraph,
  SubTitle,
  Title,
} from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";

function HomeTeam() {
  const industries = [
    "Residential Real Estate",
    "Commercial Real Estate",
    "Hospital & Medical Facilites",
    "Factories & Manufacturing Plants",
    "Mining & Resources",
  ];

  return (
    <div className="flex flex-col gap-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative w-full h-[454px] lg:h-[640] rounded-[15px] overflow-hidden">
          <ImageResolver
            fill
            alt="Hero image"
            src="/images/team-image.jpg"
            skeletonClassName="rounded-[15px]"
            className="object-cover rounded-[15px]"
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-3.5">
            <SubTitle text="About MAjestic Plumbing" />
            <Title text="Your Trusted Plumbing Partner for Over 40 Years" />
            <Paragraph text="Majestic Plumbing is a trusted industry leader, known for exceptional workmanship and customer service. With over 60 tradesmen and 75 apprentices trained, we've built a loyal clientele based on core values and high standards." />
            <Paragraph text="We take pride in our rich history and the milestones that have shaped our success, consistently delivering reliable solutions that continue to earn the trust of our clients." />
          </div>
          <Button size="xl" variant="outline" className="mx-auto md:mx-0">
            Meet The Team <ArrowLeftIcon className="mt-1.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HomeTeam };
