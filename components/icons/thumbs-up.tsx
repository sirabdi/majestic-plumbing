import { SVGProps } from "react";
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.624 42.75h-4.248A2.377 2.377 0 0 1 9 40.374V23.751a2.377 2.377 0 0 1 2.376-2.376h4.248A2.377 2.377 0 0 1 18 23.751v16.623a2.377 2.377 0 0 1-2.376 2.376ZM18 23.787l8.21-10.69c1.528-1.991 4.511-2.04 6.107-.103.596.722.92 1.631.92 2.567v7.36h6.966a4.05 4.05 0 0 1 3.366 1.797l.74 1.105a4.05 4.05 0 0 1 .527 3.373l-3.058 10.625a4.049 4.049 0 0 1-3.89 2.929h-14.15c-1.125 0-2.201-.468-2.966-1.291L18 38.474"
    />
  </svg>
);
export default ThumbsUp;
