import { SVGProps } from "react";
const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M20 1.47v17.06A1.47 1.47 0 0 1 18.53 20H1.47A1.47 1.47 0 0 1 0 18.53V1.47A1.47 1.47 0 0 1 1.47 0h17.06A1.47 1.47 0 0 1 20 1.47ZM5.882 7.648h-2.94v9.412h2.94V7.647Zm.265-3.235a1.694 1.694 0 0 0-1.682-1.706h-.053a1.706 1.706 0 0 0 0 3.412 1.694 1.694 0 0 0 1.735-1.653v-.053Zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 0 0-2.977 1.517h-.082V7.647H7.647v9.412h2.941v-5.006a1.953 1.953 0 0 1 1.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718Z"
    />
  </svg>
);
export default LinkedInIcon;
