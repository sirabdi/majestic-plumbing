import localFont from "next/font/local";

export const gilmerHeavy = localFont({
  src: [
    {
      path: "../fonts/Gilmer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilmer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gilmer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Gilmer-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilmer-heavy",
  display: "swap",
});
