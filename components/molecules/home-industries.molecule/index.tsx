"use client";

import {
  Button,
  ImageResolver,
  List,
  SubTitle,
  Title,
} from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";

function HomeIndustries() {
  const industries = [
    "Residential Real Estate",
    "Commercial Real Estate",
    "Hospital & Medical Facilites",
    "Factories & Manufacturing Plants",
    "Mining & Resources",
  ];

  return (
    <div className="bg-shade-2 rounded-[15px] p-4 sm:p-8 md:p-10 xl:px-[70px] xl:py-[60px] flex flex-col gap-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="flex flex-col gap-8 order-last lg:order-first">
          <div className="pr-0 xl:pr-32 flex flex-col gap-3.5">
            <SubTitle text="Industry EXpertise" />
            <Title text="Industry-Specific Plumbing Solutions for a Diverse Range of Sectors" />
          </div>
          <div>
            {industries.map((item, index) => {
              return <List key={index} text={item} />;
            })}
          </div>
          <Button size="xl" variant="outline" className="mx-auto md:mx-0">
            View all industries <ArrowLeftIcon className="mt-1.5" />
          </Button>
        </div>

        <div className="relative w-full h-[454px] lg:h-[708px] rounded-[15px] overflow-hidden">
          <ImageResolver
            fill
            alt="Majestic Plumbing - Industry Expertise"
            src="/images/industries-image.webp"
            skeletonClassName="rounded-[15px]"
            className="object-cover rounded-[15px]"
          />
        </div>
      </div>
    </div>
  );
}

export { HomeIndustries };
