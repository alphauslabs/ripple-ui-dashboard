import React from 'react';

export default function JapanFlag() {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 33 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 0V24H32.5V0H0.5Z"
        fill="#F7FCFF"
      />
      <mask
        id="mask0_20_1817"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="33"
        height="24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0V24H32.5V0H0.5Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_20_1817)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 19.5C20.6421 19.5 24 16.1421 24 12C24 7.85786 20.6421 4.5 16.5 4.5C12.3579 4.5 9 7.85786 9 12C9 16.1421 12.3579 19.5 16.5 19.5Z"
          fill="#E31D1C"
        />
      </g>
    </svg>
  );
}
