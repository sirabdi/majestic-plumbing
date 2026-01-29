"use client";

import { Badge, Button, ImageResolver, Title } from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import QuoteIcon from "@/components/icons/quote.icon";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules";

function HomeClients() {
  const cases = [
    {
      id: 1,
      testi:
        "The City of Perth have utilised Majestic Plumbing on several occasions. We have found them to be very professional in all the works they have carried out for us and have no hesitation in recommending them to other companies.",
      by: "Mieke Malaika",
      origin: "City of Perth",
      img: "/images/testimoni/testimoni-2.webp",
    },
    {
      id: 2,
      testi:
        "We are so glad Ivor Cohen introduced us to Majestic Plumbing, they are a high-quality contractor with professional service.",
      by: "Mieke Malaika",
      origin: "Churchill Knight Real Estate Agents",
      img: "/images/testimoni/testimoni-2.webp",
    },
    {
      id: 3,
      testi:
        "Majestic Plumbing has been providing high-quality plumbing services to Mercy College since 2002, including maintenance, emergency repairs, and involvement in major building projects. They’ve installed fire service tanks/pumps and water recycling systems.",
      by: "Soren Hansen",
      origin: "Mercy College",
      img: "/images/testimoni/testimoni-2.webp",
    },
  ];

  return (
    <div className="py-24">
      <div className="container flex flex-col gap-12 mx-auto px-3 lg:px-4 xl:px-0">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-18">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
            <Title text="What Our Clients Say" />
            <Button size="xl" variant="secondary" className="mx-auto md:mx-0">
              View case studies <ArrowLeftIcon className="mt-1.5" />
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
                <div className="w-full w-full h-[560px] rounded-[18px] bg-shade-2 relative p-8 md:p-24 lg:p-[60px] flex flex-col justify-between">
                  <div className="flex flex-col gap-6">
                    <QuoteIcon />
                    <p className="text-grey-1 md:text-lg">{item.testi}</p>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="relative w-[194.36px] h-[39.96px] rounded overflow-hidden">
                      <ImageResolver
                        fill
                        alt="Hero image"
                        src={item.img}
                        skeletonClassName="rounded"
                        className="object-contain rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xl text-black">{item.by}</p>
                      <p className="text-grey-3">{item.origin}</p>
                    </div>
                  </div>
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

export { HomeClients };
