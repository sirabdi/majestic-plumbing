import { SVGProps } from "react";
const MedalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.784 31.05-7.034 7.2 5.625 3.375 3.375 5.625 8.773-9.214M29.477 38.036l8.773 9.214 3.375-5.625 5.625-3.375-7.033-7.2"
    />
    <path
      stroke="#2F92EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M38.137 11.363c6.15 6.15 6.15 16.123 0 22.274-6.151 6.15-16.123 6.15-22.274 0-6.15-6.15-6.15-16.123 0-22.274 6.15-6.15 16.123-6.15 22.274 0Z"
    />
    <path
      stroke="#2F92EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m26.998 28.314 4.043 2.124a1.073 1.073 0 0 0 1.557-1.132l-.772-4.502 3.272-3.186a1.074 1.074 0 0 0-.594-1.831l-4.52-.657-2.021-4.098a1.072 1.072 0 0 0-1.924 0l-2.02 4.098-4.523.659a1.074 1.074 0 0 0-.594 1.831l3.272 3.186-.772 4.502c-.15.878.77 1.546 1.557 1.132l4.043-2.124h-.004v-.002Z"
    />
  </svg>
);
export default MedalIcon;
