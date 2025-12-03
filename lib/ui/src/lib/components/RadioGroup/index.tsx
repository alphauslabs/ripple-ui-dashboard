import React from 'react';

import { cva } from 'class-variance-authority';

import { Radio } from '../Radio';
import { Label } from '../Label';

import { RadioGroup as NewRadioGroup, RadioGroupItem } from './Primitives';

import { RadioGroupProps, RadioButtonGroupProps } from './RadioGroup.types';

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  disabled = false,
  keyValuePairs,
  groupValue,
  siblingComponent,
  onChangeCallback,
}) => {
  const radioVariants = cva(
    'relative inline-flex items-center justify-center w-6 h-6 border-2 rounded-full cursor-pointer',
    {
      variants: {
        variant: {
          unselected: 'bg-white border-[#C2C5D9]',
          selected: 'bg-white border-[rgba(29,85,206,1)]',
          disabled:
            'bg-[rgba(223,226,246,1)] border-[rgba(223,226,246,1)] text-[rgba(142,144,163,1)] cursor-not-allowed pointer-events-none',
        },
      },
      defaultVariants: {
        variant: 'unselected',
      },
    }
  );

  const getVariantStyle = (disabled: boolean, selected: boolean) => {
    if (disabled) {
      return radioVariants({ variant: 'disabled' });
    }

    if (selected) {
      return radioVariants({ variant: 'selected' });
    }
    return radioVariants({ variant: 'unselected' });
  };

  return (
    <NewRadioGroup value={groupValue} disabled={disabled}>
      {keyValuePairs.map((item) => (
        <div className="flex items-center space-x-2" key={item.key}>
          <RadioGroupItem
            className={getVariantStyle(disabled, item.key == groupValue)}
            value={item.key}
            id={item.key}
            onClick={onChangeCallback && (() => onChangeCallback(item.key))}
            data-testid={`radio-button-${item.key}`}
            data-state={item.key == groupValue ? 'checked' : 'unchecked'}
          />
          <Label
            htmlFor={item.key}
            data-testid={`radio-button-label-${item.value}`}
          >
            {item.value}
          </Label>

          {siblingComponent && (
            <>
              {siblingComponent.map((sibling) => {
                if (sibling.key === item.key) {
                  return (
                    <div key={sibling.key} className="flex items-center">
                      {sibling.component}
                    </div>
                  );
                }
                return null;
              })}
            </>
          )}
        </div>
      ))}
    </NewRadioGroup>
  );
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  labels,
  activeLabel,
  setActiveLabel,
  className = '',
}) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {labels.map((label, index) => {
        return (
          <Radio
            label={label}
            key={index}
            variant={activeLabel === label ? 'selected' : 'unselected'}
            onClick={() => setActiveLabel(label)}
          />
        );
      })}
    </div>
  );
};

export { RadioGroup, RadioButtonGroup };
