import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../utils';
import { SegmentedControlProps } from './SegmentedControl.types';

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [buttonPositions, setButtonPositions] = useState<
    { left: number; width: number }[]
  >([]);
  const activeIndex = options.findIndex((option) => option.value === value);

  useEffect(() => {
    if (containerRef.current) {
      const positions = buttonRefs.current.map((button) => {
        if (button) {
          const containerRect = containerRef.current!.getBoundingClientRect();
          const buttonRect = button.getBoundingClientRect();
          return {
            left: buttonRect.left - containerRect.left + 1, // Add 1px offset for spacing
            width: buttonRect.width - 2, // Subtract 2px for 1px spacing on each side
          };
        }
        return { left: 0, width: 0 };
      });
      setButtonPositions(positions);
    }
  }, [options]);

  const activeButtonPosition = buttonPositions[activeIndex];

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative inline-flex bg-neutral-90 rounded-lg p-1 h-[36px]',
        className
      )}
    >
      {/* Sliding background indicator */}
      {activeButtonPosition && (
        <div
          className="absolute top-1 bottom-1 bg-tangBlue-40 rounded-md shadow-sm transition-all duration-300 ease-in-out"
          style={{
            width: `${activeButtonPosition.width}px`,
            left: `${activeButtonPosition.left}px`,
          }}
        />
      )}

      {/* Options */}
      {options.map((option, index) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative z-10 text-sm px-3 py-1 font-medium rounded-md transition-colors duration-200 whitespace-nowrap',
              isActive ? 'text-white' : 'text-neutral-40 hover:text-neutral-20'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export { SegmentedControl };
