"use client";

import { ImageResolver } from "@/components/atoms";
import { SocialLink } from "@/components/atoms/social-link.atom";
import FacebookIcon from "@/components/icons/facebook.icon";
import InstagramIcon from "@/components/icons/instagram.icon";
import LinkedInIcon from "@/components/icons/linkedin.icon";

function Footer() {
  const socials = [<FacebookIcon />, <LinkedInIcon />, <InstagramIcon />];

  const footerMenus = [
    {
      title: "About Us",
      cols: [
        [
          "Our Team",
          "Careers",
          "Our History",
          "Awards",
          "Certifications",
          "Safety & Compliance",
        ],
        ["Case Studies", "Community", "FAQs", "Blog", "Contact"],
      ],
    },
    {
      title: "Capabilities",
      items: [
        "General Plumbing",
        "Commercial Plumbing",
        "Construction Plumbing",
        "Industrial Plumbing",
        "Asset Management",
        "Planned Preventive Maintenance",
        "Emergency Plumbing",
      ],
    },
    {
      title: "Services",
      items: [
        "Maintenance",
        "Water Filtration",
        "Gas Fitting",
        "Block Drains",
        "Grease Trap Cleaning",
        "Hot Water System",
        "Backflow Testing & Prevention",
        "Roof Plumbing",
        "Leak Detection",
      ],
    },
    {
      title: "Industries",
      items: ["Residential", "Commercial", "Industrial"],
    },
  ];

  const FooterSection = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <div className="flex flex-col gap-2">
      <p className="text-lg font-bold text-white">{title}</p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[15px] text-grey-6 hover:text-white cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer>
      <div className="bg-blue-4">
        <div className="container flex flex-col gap-8 sm:gap-12 mx-auto py-10 sm:py-[70px] px-3 lg:px-4 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-16 lg:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-24 justify-between lg:justify-start w-full">
              <div className="relative w-[262px] h-[79.39px] overflow-hidden">
                <ImageResolver
                  fill
                  alt="Majestic Plumbing Logo"
                  src="/images/logo-white.png"
                  skeletonClassName="rounded"
                  className="object-cover rounded"
                />
              </div>
              <div className="flex items-center gap-4">
                {socials.map((item, index) => {
                  return <SocialLink key={index} icon={item} />;
                })}
              </div>
            </div>
            <div className="flex items-center justify-start lg:justify-end w-full">
              <div className="relative w-full sm:w-[469.46px] h-[106px] overflow-hidden">
                <ImageResolver
                  fill
                  alt="Majestic Plumbing Associate Logo"
                  src="/images/logo-associate.png"
                  skeletonClassName="rounded"
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-16 lg:gap-8">
            {/* About Us */}
            <div className="col-span-1 sm:col-span-2 flex flex-col gap-2">
              <p className="text-lg font-bold text-white">About Us</p>
              <div className="grid grid-cols-2 gap-4">
                {footerMenus[0].cols!.map((col, i) => (
                  <ul key={i} className="flex flex-col gap-2">
                    {col.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] text-grey-6 hover:text-white cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Other sections */}
            {footerMenus.slice(1).map((menu) => (
              <FooterSection
                key={menu.title}
                title={menu.title}
                items={menu.items!}
              />
            ))}

            <div className="flex flex-col gap-4">
              <FooterSection title="Contact Us" items={["08 9209 0888"]} />
              <FooterSection
                title="Address"
                items={[
                  "91 Crocker Drive",
                  "Malaga WA 6090",
                  "Mon - Fri: 7:30am – 4:30pm",
                ]}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-[15px] text-white">
                Licensed Contractor: PL 5034
              </p>
              <p className="text-[15px] text-white">
                Licensed Gasfitter: GF 4593
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-[30px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between container mx-auto px-3 lg:px-4 xl:px-0">
            <p className="text-[15px] text-white/50">
              © Majestic Plumbing Pty Ltd
            </p>
            <p className="text-[15px] text-white/50">Website by Clue</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
