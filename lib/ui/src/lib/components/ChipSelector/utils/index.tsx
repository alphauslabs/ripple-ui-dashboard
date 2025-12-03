export const countAllItems = (
  items: { value: string; displayText: string }[]
) => {
  return items.filter((i) => i.value === 'all').length;
};

export const isAllItemSelected = (
  allItems: { value: string; displayText: string }[],
  selectedItems: { value: string; displayText: string }[]
) => {
  const countAll = countAllItems(allItems);
  return (
    allItems.length > 0 && selectedItems.length === allItems.length - countAll
  );
};

export const isItemSelected = (
  item: { value: string; displayText: string },
  allItems: { value: string; displayText: string }[],
  selectedItems: { value: string; displayText: string }[]
) => {
  if (item.value === 'all') {
    return isAllItemSelected(allItems, selectedItems);
  }
  return selectedItems.some((i) => i.value === item.value);
};
