"use client";

import { Badge, Button, ImageResolver, Title } from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules";

function HomeCaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Carpet Call Leak Detection",
      tags: "Leak Detection",
      img: "/images/cases/case-3.webp",
    },
    {
      id: 2,
      title: "Holiday Inn",
      tags: "Planned Preventative Maintenance",
      img: "/images/cases/case-1.webp",
    },
    {
      id: 3,
      title: "The Ashby Bar & Bistro",
      tags: "Leak Detection",
      img: "/images/cases/case-2.webp",
    },
  ];

  return (
    <div className="py-24">
      <div className="container flex flex-col gap-12 mx-auto px-3 lg:px-4 xl:px-0">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-18">
          <div className="flex items-center justify-between gap-3 w-full">
            <Title text="Case Studies" />
            <Button
              size="xl"
              variant="secondary"
              className="hidden md:flex mx-auto md:mx-0"
            >
              View all services <ArrowLeftIcon className="mt-1.5" />
            </Button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            slidesToScroll: "auto",
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {cases.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="w-full w-full h-[270px] md:h-[320px] lg:h-[500px] rounded-[18px] bg-black/50 relative">
                  <ImageResolver
                    fill
                    alt="Majestic Plumbing - Case Studies"
                    src={item.img}
                    skeletonClassName="rounded-[18px]"
                    className="object-cover rounded-[18px]"
                  />
                  <div className="flex items-start flex-col gap-4 px-6 absolute bottom-6 w-full z-50">
                    <p className="text-2xl text-white font-bold">
                      {item.title}
                    </p>
                    <Badge variant="default">{item.tags}</Badge>
                  </div>
                  <div className="w-full w-full h-[270px] md:h-[320px] lg:h-[500px] rounded-[18px] absolute z-20 bg-gradient-to-b from-black/0 from-[34.5%] to-black/80 top-0"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-0 w-full flex items-center justify-between">
            <CarouselDots
              className="translate-none bottom-3 left-[44%] md:left-1/2"
              dotClassName="bg-blue-1-15"
            />
          </div>
          <div className="w-full flex items-center justify-between mt-5.5">
            <CarouselPrevious
              variant="secondary"
              className="relative translate-none top-0 left-0"
            />
            <CarouselNext
              variant="secondary"
              className="relative translate-none top-0 right-0"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export { HomeCaseStudies };
