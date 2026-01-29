import { SVGProps } from "react";
const HoursIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M46.31 21.044c.614 1.926.93 3.934.94 5.956A20.25 20.25 0 1 1 27 6.75c2.021.01 4.03.326 5.956.94M47.25 9.616l-4.473 4.473-2.869-2.868"
    />
    <path
      stroke="#2F92EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.174 24.134a3.316 3.316 0 1 1 6.633 0c0 4.144-6.633 4.144-6.633 9.053h6.633M34.947 33.188V21.963a1.145 1.145 0 0 0-2.115-.611 317.478 317.478 0 0 0-4.28 7.159 1.233 1.233 0 0 0 1.076 1.852h7.198"
    />
  </svg>
);
export default HoursIcon;
