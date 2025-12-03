export interface ComboBoxItem {
  id: string;
  name: string;
}

export interface ComboBoxProps {
  placeholder?: string;
  options: Array<ComboBoxItem>;
  selectedItem: ComboBoxItem | undefined | null;
  setSelectedItem: (item: ComboBoxItem) => void;
  label?: string;
  blocked?: boolean;
  dataTestId?: string;
}
