import React from 'react';

interface ArrowIconProps {
  direction: 'up' | 'down' | 'asc' | 'desc';
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction }) => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-2 h-1 fill-current text-gray-900 transition-transform ${
        direction === 'up' ? 'rotate-180' : ''
      }`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.70705 4.536C4.51952 4.72347 4.26522 4.82879 4.00005 4.82879C3.73489 4.82879 3.48058 4.72347 3.29305 4.536L0.464052 1.707C0.324182 1.56709 0.228955 1.38883 0.19042 1.19479C0.151884 1.00074 0.171771 0.799624 0.247565 0.616884C0.323359 0.434143 0.451654 0.27799 0.616217 0.168182C0.78078 0.0583735 0.974216 -0.00015534 1.17205 3.09641e-07H6.82805C7.02589 -0.00015534 7.21932 0.0583735 7.38389 0.168182C7.54845 0.27799 7.67674 0.434143 7.75254 0.616884C7.82833 0.799624 7.84822 1.00074 7.80968 1.19479C7.77115 1.38883 7.67592 1.56709 7.53605 1.707L4.70705 4.536Z"
      />
    </svg>
  );
};

export default ArrowIcon;
