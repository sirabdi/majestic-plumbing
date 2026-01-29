"use client";

import { Button, Title } from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import { BlogCard } from "@/components/molecules";

function HomeBlog() {
  const blogs = [
    {
      id: 1,
      img: "/images/blogs/blog-image-1.webp",
      tags: "Commercial Plumbing",
      date: "Feb 22, 2025",
      title:
        "The Importance of Preventative Plumbing Maintenance for Commercial Properties",
      desc: "Discover why regular plumbing maintenance is crucial for commercial properties and how it can prevent costly repairs and downtime.",
    },
    {
      id: 2,
      img: "/images/blogs/blog-image-2.webp",
      tags: "Industrial Plumbing",
      date: "Mar 5, 2025",
      title:
        "How to Ensure Your Industrial Plumbing Systems Are Compliant with Regulations",
      desc: "Learn about key regulations for industrial plumbing systems and how to stay compliant to avoid fines and operational disruptions.",
    },
    {
      id: 3,
      img: "/images/blogs/blog-image-3.webp",
      tags: "Plumbing Tips & Maintenance",
      date: "March 18, 2025",
      title: "Top Tips for Maintaining Your Hot Water Systems Year-Round",
      desc: "Keep your hot water systems running smoothly with these essential maintenance tips to ensure reliability and energy efficiency.",
    },
  ];

  return (
    <div className="bg-white-6 py-16 lg:py-24">
      <div className="container mx-auto px-3 lg:px-4 xl:px-0">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-18">
          <div className="block md:flex items-center justify-between">
            <Title text="From Our Blog" />

            <Button
              size="xl"
              variant="default"
              className="hidden md:flex mx-auto md:mx-0"
            >
              View more articles <ArrowLeftIcon className="mt-1.5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {blogs.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>

          <Button
            size="xl"
            variant="default"
            className="flex md:hidden mx-auto md:mx-0"
          >
            View more articles <ArrowLeftIcon className="mt-1.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HomeBlog };
