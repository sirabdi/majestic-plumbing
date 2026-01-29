"use client";

import { Badge, ImageResolver, Paragraph } from "@/components/atoms";

interface Props {
  item: {
    id: number;
    img: string;
    tags: string;
    date: string;
    title: string;
    desc: string;
  };
}

function BlogCard({ item }: Props) {
  return (
    <div className="flex flex-col gap-2.5 lg:gap-4 cursor-pointer">
      <div className="relative w-full h-[320px] rounded-[15px] overflow-hidden">
        <ImageResolver
          fill
          alt={item.title}
          src={item.img}
          skeletonClassName="rounded-[15px]"
          className="object-cover rounded-[15px]"
        />
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="default">{item.tags}</Badge>
        <p className="text-xs uppercase text-grey-5 font-extrabold">
          {item.date}
        </p>
      </div>
      <p className="text-2xl text-blue-3 font-bold">{item.title}</p>
      <Paragraph text={item.desc} className="text-left" />
    </div>
  );
}

export { BlogCard };
