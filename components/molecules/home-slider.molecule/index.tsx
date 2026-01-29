import {
  Button,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ImageResolver,
  SubTitle,
} from "@/components/atoms";

export function HomeSlider() {
  return (
    <div>
      <Carousel className="w-full relative">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative w-full h-[calc(100dvh-140px)] overflow-hidden">
                <ImageResolver
                  fill
                  alt="Hero image"
                  src="/images/slider/slider-1.webp"
                  className="object-cover"
                />
              </div>
              <div className="w-full h-[calc(100dvh-140px)] flex items-end justify-center absolute top-0 bg-gradient-to-b from-black/0 from-[34.5%] to-black/80">
                <div className="w-[780px] flex flex-col justify-center gap-0.5 md:gap-2 pb-16 md:pb-24 px-8 md:px-0">
                  <p className="text-xs text-white font-extrabold tracking-[.08rem] uppercase text-center">
                    Perth’s Trusted Experts in Plumbing & Gas
                  </p>
                  <p className="text-2xl md:text-5xl font-bold text-white text-center mb-0  md:mb-2">
                    Commercial & Industrial Plumbing Solutions
                  </p>
                  <p className="text-xs md:text-lg text-white text-center">
                    Combining decades of expertise with cutting-edge technology,
                    we provide innovative plumbing and gas solutions that
                    minimise downtime and optimise performance.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-3 justify-center mt-2 md:mt-4">
                    <Button
                      size="xl"
                      variant="secondary"
                      className="mx-auto md:mx-0"
                    >
                      Our Capabilities
                    </Button>
                    <Button
                      size="xl"
                      variant="default"
                      className="mx-auto md:mx-0"
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 w-full flex items-center justify-between">
          <CarouselDots />
        </div>
      </Carousel>
    </div>
  );
}
