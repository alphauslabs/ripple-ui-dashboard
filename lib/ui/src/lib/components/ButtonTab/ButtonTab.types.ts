export type ButtonTabActiveNode = 'left' | 'right';

export interface ButtonTabProps extends React.HTMLAttributes<HTMLDivElement> {
  labels: Array<string>;
  activeLabel: string;
  setActiveLabel: (label: string) => void;
}
