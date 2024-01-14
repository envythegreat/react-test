import * as React from "react"
import { SVGProps } from "react"


interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
  color?: string;
}


const BurgerIcon: React.FC<SvgComponentProps> = ({
  width = 44,
  height = 36,
  // color = "white",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 44 36"
    fill="none"
  >
    <path
      d="M3.39837 6.79674L32.9337 6.79673C34.8076 6.79673 36.3321 5.2723 36.3321 3.39837C36.3321 1.52443 34.8076 0 32.9337 0L3.39837 1.54972e-06C1.52443 1.54972e-06 0 1.52443 0 3.39837C0 5.2723 1.52443 6.79674 3.39837 6.79674ZM39.9337 14.3279L3.39837 14.3279C1.52443 14.3279 0 15.8523 0 17.7263C0 19.6002 1.52443 21.1246 3.39837 21.1246L39.9337 21.1246C41.8076 21.1246 43.3321 19.6002 43.3321 17.7263C43.3321 15.8523 41.8076 14.3279 39.9337 14.3279ZM20.9337 28.6558L3.39837 28.6558C1.52443 28.6558 0 30.1802 0 32.0541C0 33.9281 1.52443 35.4525 3.39837 35.4525H20.9337C22.8076 35.4525 24.3321 33.9281 24.3321 32.0541C24.3321 30.1802 22.8076 28.6558 20.9337 28.6558Z"
      fill="url(#paint0_linear_62_35)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_62_35"
        x1={21.666}
        y1={0}
        x2={21.666}
        y2={35.4525}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#50799E" />
        <stop offset={1} stopColor="#335D84" />
      </linearGradient>
    </defs>
  </svg>
)
export default BurgerIcon
