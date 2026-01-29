"use client";

import {
  Button,
  ImageResolver,
  Paragraph,
  SubTitle,
  Title,
} from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import CheckList from "@/components/icons/checklist.icon";
import WarningTask from "@/components/icons/warning-task.icon";
import { Service } from "@/components/molecules";

function HomePlanMolecule() {
  const services = [
    {
      id: 1,
      icon: <CheckList />,
      title: "Asset Register & PPM",
      desc: "We audit your site assets and craft a tailored PPM program to meet compliance and manufacturer guidelines, maximising performance and preventing disruptions.",
    },
    {
      id: 2,
      icon: <CheckList />,
      title: "Service Schedule",
      desc: `Your custom PPM schedule complies with Australian Standards. Our "Set & Forget" system manages recurring services and keeps you informed.`,
    },
    {
      id: 3,
      icon: <WarningTask />,
      title: "Reporting",
      desc: "We perform condition assessments and failure reporting, providing prompt quotes for any necessary repairs or replacements.",
    },
  ];

  return (
    <div className="border border-blue-3-15 rounded-[15px] p-4 sm:p-8 md:p-10 xl:px-[70px] xl:py-[60px] flex flex-col gap-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-8">
          <div className="pr-0 xl:pr-32 flex flex-col gap-3.5">
            <SubTitle text="Minimise downtime, maximise performance" />
            <Title text="Planned Preventive Maintenance to Safeguard Your Assets" />
          </div>
          <Paragraph text="Experience peace of mind with Majestic Plumbing’s tailored Planned Preventative Maintenance solutions. Our comprehensive PPM schedule is designed to safeguard your assets, minimise emergency events, and ensure your plumbing and gas systems perform at peak efficiency. Focus on your business while we proactively manage maintenance, keeping you compliant with Australian Standards and manufacturer recommendations." />
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button size="xl" variant="default" className="mx-auto md:mx-0">
              Request an audit <ArrowLeftIcon className="mt-1.5" />
            </Button>
            <Button size="xl" variant="outline" className="mx-auto md:mx-0">
              More about us <ArrowLeftIcon className="mt-1.5" />
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[454px] rounded-[15px] overflow-hidden">
          <ImageResolver
            fill
            alt="Hero image"
            src="/images/service-image.jpg"
            skeletonClassName="rounded-[15px]"
            className="object-cover rounded-[15px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((item) => {
          return <Service key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export { HomePlanMolecule };
