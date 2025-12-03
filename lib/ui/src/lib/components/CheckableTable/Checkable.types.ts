export interface CheckableColumn<T> {
  key: keyof T;
  label: string;
  isSortable?: boolean;
}

export interface CheckableTableProps<T> {
  data: Array<T>;
  selectedData: Array<T>;
  columns: Array<CheckableColumn<T>>;
  onSelectAll: () => void;
}
