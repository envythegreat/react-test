import * as React from "react";
import { SVGProps } from "react";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
}
const SearchIcon: React.FC<SvgComponentProps> = ({
  height = 32,
  width = 32,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    viewBox="0 0 32 32"
    fill="none"
  >
    <g clipPath="url(#clip0_0_385)">
      <path
        d="M21.6545 3.72001C16.7073 -1.22712 8.65751 -1.22702 3.71028 3.72001C-1.23695 8.66724 -1.23694 16.7169 3.71028 21.6641C7.90733 25.8611 14.1494 26.4967 19.0238 23.5727C19.0238 23.5727 19.3762 23.3627 19.6597 23.6463C21.2779 25.2646 26.1332 30.1199 26.1332 30.1199C27.4216 31.4084 29.2233 31.7152 30.3661 30.5725L30.5627 30.3758C31.7055 29.2331 31.3989 27.4314 30.1104 26.143C30.1104 26.143 25.2653 21.298 23.6504 19.683C23.3531 19.3857 23.5632 19.0334 23.5632 19.0334C26.4871 14.1591 25.8516 7.91706 21.6545 3.72001ZM19.3119 19.3215C15.6564 22.977 9.70859 22.9769 6.05309 19.3214C2.3977 15.666 2.3976 9.71812 6.05309 6.06272C9.70849 2.40723 15.6564 2.40723 19.3119 6.06272C22.9672 9.71822 22.9672 15.666 19.3119 19.3215Z"
        fill="#50799E"
      />
      <path
        d="M11.9296 18.512C11.9296 18.6822 11.8962 18.8551 11.8257 19.0218C11.5439 19.6878 10.7755 19.9994 10.1094 19.7175C5.92294 17.946 3.95829 13.0989 5.72983 8.91251C6.01169 8.24655 6.7801 7.93498 7.44616 8.21684C8.11223 8.49879 8.4236 9.267 8.14184 9.93327C6.93322 12.7895 8.27371 16.0969 11.13 17.3054C11.6295 17.5168 11.9296 18.0018 11.9296 18.512Z"
        fill="#1AA5C0"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_385">
        <rect
          width={31.2704}
          height={31.2704}
          fill="white"
          transform="translate(0 31.2803) rotate(-90)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SearchIcon;