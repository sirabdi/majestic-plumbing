"use client";

import { Button, Card, Paragraph, SubTitle, Title } from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import Certificate from "@/components/icons/certificate";
import ExperienceIcon from "@/components/icons/experience.icon";
import FlagIcon from "@/components/icons/flag.icon";
import HoursIcon from "@/components/icons/hours.icon";
import MedalIcon from "@/components/icons/medal.icon";
import ThumbsUp from "@/components/icons/thumbs-up";

function HomeAbout() {
  const statistic = [
    {
      id: 1,
      icon: <ExperienceIcon />,
      value: "1988",
      desc: "4 Decades of Experience",
    },
    {
      id: 2,
      icon: <FlagIcon />,
      value: "WA",
      desc: "Locally Owned and Operated",
    },
    {
      id: 3,
      icon: <HoursIcon />,
      value: "24/7",
      desc: "Emergency Service",
    },
    {
      id: 4,
      icon: <ThumbsUp />,
      value: "3,865",
      desc: "Happy Clients",
    },
    {
      id: 5,
      icon: <Certificate />,
      value: "100%",
      desc: "Quality & Service Guarantee",
    },
    {
      id: 6,
      icon: <MedalIcon />,
      value: "5",
      desc: "Award-Recognised Industry Leader",
    },
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
        <div className="pr-0 lg:pr-32 flex flex-col gap-3.5">
          <SubTitle text="Perth’s Trusted Plumbing & Gas Experts" />
          <Title
            text="Over 3,865 clients trust Majestic Plumbing to deliver reliable
            plumbing solutions."
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-6 lg:gap-8">
          <Paragraph text="With over 40 years of experience, we have built a reputation for excellence, reliability, and innovation in commercial and industrial plumbing. Businesses across Perth trust us to deliver high-quality solutions that ensure compliance, efficiency, and long-term performance." />
          <Button size="xl" variant="outline" className="mx-auto md:mx-0">
            More about us <ArrowLeftIcon className="mt-1.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
        {statistic.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export { HomeAbout };
