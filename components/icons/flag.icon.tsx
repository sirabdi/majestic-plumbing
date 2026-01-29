import { SVGProps } from "react";
const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <path
      stroke="#2F92EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.25 47.25V8.843M42.75 31.545V9M11.25 31.5s1.969-1.636 7.875-1.636 9.844 3.886 15.75 3.886c5.906 0 7.875-2.198 7.875-2.198M11.25 8.847s1.969-2.097 7.875-2.097 9.844 3.886 15.75 3.886C40.781 10.636 42.75 9 42.75 9"
    />
  </svg>
);
export default FlagIcon;
