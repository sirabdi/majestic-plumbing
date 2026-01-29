import { SVGProps } from "react";
const WarningTask = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M11 21H5.99c-1.66-.01-3-1.35-3-3V5.997a2.996 2.996 0 0 1 2.99-3.01h12-.01c1.65-.01 3 1.34 3 3v5M11 16h1" />
      <path d="m19.55 14.76 2.24 3.99c.4.72.14 1.64-.58 2.04-.23.12-.48.19-.74.19h-4.49c-.84-.01-1.51-.68-1.51-1.51 0-.26.06-.52.19-.74l2.24-4h-.01c.4-.73 1.32-.99 2.04-.58.24.13.43.33.57.57l.05.04ZM15 12h-4M17 8h-6M7 8.125h-.01c.06 0 .12-.06.12-.13s-.06-.13-.13-.13c-.07-.01-.13.05-.13.12l-.01-.01c0 .06.05.12.12.12v-.01M7 16.125h-.01c.06 0 .12-.06.12-.13s-.06-.13-.13-.13c-.07-.01-.13.05-.13.12l-.01-.01c0 .06.05.12.12.12v-.01M7 12.125h-.01c.06 0 .12-.06.12-.13s-.06-.13-.13-.13c-.07-.01-.13.05-.13.12l-.01-.01c0 .06.05.12.12.12v-.01" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default WarningTask;
