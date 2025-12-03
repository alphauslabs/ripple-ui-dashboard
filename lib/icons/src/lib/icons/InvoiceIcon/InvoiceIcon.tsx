import React from 'react';
import { SVGPropTypes } from '../../types';
type InvoiceIconProps = React.SVGProps<SVGSVGElement>;

const InvoiceIcon: React.FC<InvoiceIconProps> = ({ ...props }) => {
  return (
    <svg
      width={'24'}
      height={'24'}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id="clip0_28_5393">
          <rect width="20" height="20" fill="white"></rect>
        </clipPath>
      </defs>
      <g transform="translate(3 3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.5C0 1.11929 1.11929 0 2.5 0H15C16.6569 0 18 1.34315 18 3V17C18 17.3623 17.8041 17.6962 17.4878 17.873C17.1715 18.0497 16.7844 18.0415 16.4759 17.8517L13.75 16.1742L11.0241 17.8517C10.7027 18.0494 10.2973 18.0494 9.9759 17.8517L7.25 16.1742L4.5241 17.8517C4.21556 18.0415 3.82845 18.0497 3.5122 17.873C3.19594 17.6962 3 17.3623 3 17V11H1C0.44772 11 0 10.5523 0 10V2.5ZM5 15.2104L6.7259 14.1483C7.0473 13.9506 7.4527 13.9506 7.7741 14.1483L10.5 15.8258L13.2259 14.1483C13.5473 13.9506 13.9527 13.9506 14.2741 14.1483L16 15.2104V3C16 2.44772 15.5523 2 15 2H4.94999C4.98279 2.16155 5 2.32877 5 2.5V15.2104ZM2.5 2C2.22386 2 2 2.22386 2 2.5V9H3V2.5C3 2.22386 2.77614 2 2.5 2ZM7 6C7 5.44772 7.4477 5 8 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H8C7.4477 7 7 6.55228 7 6ZM7 10C7 9.4477 7.4477 9 8 9H12C12.5523 9 13 9.4477 13 10C13 10.5523 12.5523 11 12 11H8C7.4477 11 7 10.5523 7 10Z"
        ></path>
      </g>
    </svg>
  );
};

export default InvoiceIcon;
