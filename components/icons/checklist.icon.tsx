import { SVGProps } from "react";
const CheckList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M8 5H5.99c-1.11 0-2 .89-2 2v12c0 1.1.89 1.99 2 1.99h5" />
      <path d="M15 3H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM16 5h2-.01c1.1-.01 2 .89 2 1.99v3M17.5 13h-.01c2.48-.01 4.5 2.01 4.5 4.49 0 2.48-2.02 4.5-4.5 4.5-2.49 0-4.5-2.02-4.51-4.5a4.494 4.494 0 0 1 4.49-4.51" />
      <path d="m19.03 16.71-1.92 1.91-1.15-1.15" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CheckList;
