import { SVGProps } from "react";
const Hours24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#0C67BD"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path d="m19.761 13.006 1.246 1.246 1.246-1.246M4.239 10.994 2.993 9.748l-1.246 1.246M7.587 10.729a1.47 1.47 0 0 1 2.938 0c0 1.836-2.937 1.836-2.937 4.01h2.937M15.894 12.03l-2.512-.027a.26.26 0 0 1-.257-.26V9.261M15.89 9.32v5.42" />
      <path d="M19.023 17.628A8.986 8.986 0 0 1 12.002 21h-.004c-4.974 0-9.005-4.03-9.005-9.002 0-.694.086-1.367.235-2.016M4.981 6.372A8.984 8.984 0 0 1 12.002 3c4.974 0 9.005 4.03 9.005 9.002a8.99 8.99 0 0 1-.235 2.016" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Hours24Icon;
