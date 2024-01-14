import * as React from "react"
import { SVGProps } from "react"

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
  color?: string;
}

const NewPatientIcon: React.FC<SvgComponentProps> = ({
  height = 48,
  width = 55,
  color = "#1AA5C0",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 55 48"
    fill="none"
  >
    <path
      d="M47.6453 8.31867H25.7493L23.9133 4.03467C23.3774 2.83489 22.506 1.81567 21.4041 1.09982C20.3021 0.383968 19.0167 0.00202195 17.7027 0H6.75467C3.01467 0 0 3.03733 0 6.75467V40.8227C0 44.54 3.03733 47.5773 6.75467 47.5773H47.6453C51.3627 47.5773 54.4 44.54 54.4 40.8227V15.0733C54.4 11.3333 51.3627 8.31867 47.6453 8.31867ZM33.388 31.3027H29.852V34.8387C29.852 36.312 28.6733 37.4907 27.2 37.4907C25.7493 37.4907 24.548 36.312 24.548 34.8387V31.3027H21.0347C20.3343 31.3027 19.6627 31.0245 19.1674 30.5292C18.6722 30.034 18.394 29.3623 18.394 28.662C18.394 27.9617 18.6722 27.29 19.1674 26.7948C19.6627 26.2995 20.3343 26.0213 21.0347 26.0213H24.548V22.4853C24.548 21.012 25.7493 19.8333 27.2 19.8333C28.6733 19.8333 29.852 21.012 29.852 22.4853V26.0213H33.388C34.816 26.0213 35.9947 27.2 35.9947 28.6733C35.9947 30.124 34.816 31.3027 33.388 31.3027Z"
      fill={color}
    />
  </svg>
)
export default NewPatientIcon
