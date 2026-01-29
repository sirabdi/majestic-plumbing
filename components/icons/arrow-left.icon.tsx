import { SVGProps } from "react";
const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 5.75h-14M9.75 10.75l5-5M9.75.75l5 5"
    />
  </svg>
);
export default ArrowLeftIcon;
