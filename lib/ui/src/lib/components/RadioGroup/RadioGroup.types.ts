export interface RadioGroupProps {
  className?: string;
  labels: Array<string>;
  activeLabel: string;
  setActiveLabel: (label: string) => void;
}

export interface RadioButtonGroupProps {
  groupValue: string;
  keyValuePairs: Array<{ key: string; value: string }>;
  onChangeCallback?: (value: string) => void;
  disabled?: boolean;
  siblingComponent?: Array<{ key: string; component: React.ReactNode }>;
}
