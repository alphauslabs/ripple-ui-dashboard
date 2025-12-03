import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTabProps } from './ButtonTab.types';

const ButtonTab = React.forwardRef<HTMLDivElement, ButtonTabProps>(
  ({ className, labels, activeLabel, setActiveLabel, ...props }) => {
    const { t } = useTranslation();
    const activeFontStyle =
      'text-[16px] font-semibold leading-[24px] tracking-[-0.01em] text-center text-[#1D55CE]';
    const inactiveFontStyle =
      'text-[16px] font-normal leading-[24px] tracking-[-0.01em] text-center text-[#434657]';

    const handleNodeClick = (index: number) => {
      setActiveLabel(labels[index]);
    };

    return (
      <div className="inline-flex w-auto">
        <div
          className="flex flex-row bg-[#EEF0FF] gap-[6px] p-1 rounded-[6px] items-center"
          {...props}
        >
          {labels.map((label, index) => {
            const isActive = activeLabel === label;
            return (
              <div
                key={index}
                className={`cursor-pointer rounded-[4px] px-[8px] py-[6px] transition-all duration-300 ease-in-out ${
                  isActive ? 'bg-[#FFFFFF]' : 'bg-transparent'
                }`}
                onClick={() => handleNodeClick(index)}
              >
                <p className={isActive ? activeFontStyle : inactiveFontStyle}>
                  {t(label.toLowerCase())}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

ButtonTab.displayName = 'ButtonTab';

export { ButtonTab };
