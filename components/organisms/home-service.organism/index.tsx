"use client";

import {
  Button,
  ImageResolver,
  Paragraph,
  SubTitle,
  Title,
} from "@/components/atoms";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import { CircleArrowRight } from "lucide-react";

function HomeService() {
  const services = [
    {
      id: 1,
      title: "General Plumbing",
      img: "/images/services/service-1.webp",
    },
    {
      id: 2,
      title: "Commercial Plumbing",
      img: "/images/services/service-2.webp",
    },
    {
      id: 3,
      title: "Construction Plumbing",
      img: "/images/services/service-3.webp",
    },
    {
      id: 4,
      title: "Industrial Plumbing",
      img: "/images/services/service-4.webp",
    },
  ];

  return (
    <div className="bg-blue-4 py-24">
      <div className="container flex flex-col gap-12 mx-auto px-3 lg:px-4 xl:px-0">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3 pr-0 lg:pr-32">
              <SubTitle text="Plumbing Solutions for Every Business Need" />
              <Title text="Our Services & Solutions" className="text-white" />
              <Paragraph
                text="From general plumbing to specialized industrial solutions, we provide expert services tailored to your business needs."
                className="text-white"
              />
            </div>
            <div className="flex items-end justify-start lg:justify-end">
              <Button size="xl" variant="secondary" className="mx-auto md:mx-0">
                View all services <ArrowLeftIcon className="mt-1.5" />
              </Button>
            </div>
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
            {services.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="w-full h-[270px] md:h-[320px] lg:h-[500px] rounded-[18px] bg-black/50 relative cursor-pointer">
                  <ImageResolver
                    fill
                    alt={item.title}
                    src={item.img}
                    skeletonClassName="rounded-[18px]"
                    className="object-cover rounded-[18px]"
                  />
                  <div className="flex items-center rounded-[18px] justify-between px-6 absolute bottom-6 w-full z-50">
                    <p className="text-[21px] text-white font-bold">
                      {item.title}
                    </p>
                    <CircleArrowRight className="text-white" />
                  </div>
                  <div className="w-full h-[270px] md:h-[320px] lg:h-[500px] rounded-[18px] absolute z-20 bg-gradient-to-b from-black/0 from-[34.5%] to-black/80 top-0"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-0 w-full flex items-center justify-between">
            <CarouselDots
              className="translate-none bottom-3 left-[40%] md:left-1/2"
              dotClassName="bg-white/20"
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

export { HomeService };
