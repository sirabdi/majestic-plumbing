"use client";

import { Button, ImageResolver, SubTitle } from "@/components/atoms";
import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import Hours24Icon from "@/components/icons/hours-24-icon";
import PhoneIcon from "@/components/icons/phone.icon";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const MAIN_MENU = [
  "Home",
  "Capabilities",
  "Services",
  "Industries",
  "Case Studies",
];

const ABOUT_MENU = ["About Us", "Community", "FAQs", "Blog", "Contact Us"];

function Logo({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const size =
    variant === "mobile" ? "w-[118px] h-[36px]" : "w-[198px] h-[60px]";

  return (
    <div className={`relative ${size} rounded overflow-hidden`}>
      <ImageResolver
        fill
        alt="Majestic Plumbing Logo"
        src="/images/logo-blue.webp"
        className="object-contain"
      />
    </div>
  );
}

function MenuList({
  items,
  withChevron = false,
}: {
  items: string[];
  withChevron?: boolean;
}) {
  return (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-1 cursor-pointer text-base text-grey-1 hover:text-blue-1 font-bold"
        >
          {item}
          {withChevron && <ChevronDown size={16} />}
        </li>
      ))}
    </ul>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  /* Scroll detection (optimized) */
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    const body = document.body;

    if (showMobileMenu) body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");

    return () => body.classList.remove("overflow-hidden");
  }, [showMobileMenu]);

  return (
    <header
      className={`
        sticky top-0 z-50 bg-white transition-shadow
        ${isScrolled ? "shadow-md" : "shadow-none"}
      `}
    >
      {/* Desktop Top Bar */}
      <div className="hidden lg:block bg-white-5 border-b">
        <div className="mx-auto max-w-[1600px] px-4">
          <div className="h-10 flex items-center justify-end gap-8 text-[13px] text-grey-2">
            {ABOUT_MENU.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <span className="flex items-center gap-2">
              <PhoneIcon /> 08 9209 0888
            </span>
            <span className="flex items-center gap-2 font-extrabold">
              <Hours24Icon />
              After Hours Emergency 0488 689 009
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Main Header */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1600px] px-4">
          <div className="flex items-center justify-between h-[100px]">
            <Logo />

            <div className="flex items-center gap-10">
              <MenuList items={MAIN_MENU} withChevron />

              <div className="flex items-center gap-2">
                <Button size="lg" variant="secondary">
                  Request Quote <ArrowLeftIcon className="mt-1.5" />
                </Button>
                <Button size="lg" variant="default">
                  Book Now <ArrowLeftIcon className="mt-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md">
        <div className="h-20 flex items-center gap-4 px-4">
          <button
            onClick={() => setShowMobileMenu((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {showMobileMenu ? <X size={32} /> : <Menu size={32} />}
          </button>
          <Logo variant="mobile" />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="bg-white-6">
          <div className="h-[calc(100dvh-80px)] overflow-y-auto px-4 py-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <SubTitle
                text="Perth’s Trusted Plumbing & Gas Experts"
                className="text-left"
              />

              <MenuList items={MAIN_MENU} withChevron />

              <SubTitle text="About Majestic Plumbing" className="text-left" />
              <MenuList items={ABOUT_MENU} />

              <div className="flex flex-col gap-2 text-[13px] text-grey-2">
                <span className="flex items-center gap-2">
                  <PhoneIcon /> 08 9209 0888
                </span>
                <span className="flex items-center gap-2 font-extrabold">
                  <Hours24Icon />
                  After Hours Emergency 0488 689 009
                </span>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="fixed bottom-0 w-full border-t bg-white px-4 py-3">
            <div className="grid grid-cols-2 gap-2">
              <Button size="lg" variant="secondary" className="w-full">
                Request Quote <ArrowLeftIcon className="mt-1.5" />
              </Button>
              <Button size="lg" variant="default" className="w-full">
                Book Now <ArrowLeftIcon className="mt-1.5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header };
