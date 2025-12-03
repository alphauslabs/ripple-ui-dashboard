import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { Input } from '../Input/Input';

import { ComboBoxProps, ComboBoxItem } from './ComboBox.types';

const ComboBox: React.FC<ComboBoxProps> = ({
  options,
  selectedItem,
  setSelectedItem,
  placeholder,
  label,
  blocked = false,
  dataTestId = '',
}) => {
  const [filteredOptions, setFilteredOptions] =
    useState<Array<ComboBoxItem>>(options);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasMatch, setHasMatch] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>(
    selectedItem?.name || ''
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle item click
  const handleItemClick = useCallback(
    (item: ComboBoxItem) => {
      setSelectedItem(item);
      setInputValue(item.name);
      setIsOpen(false);
    },
    [setSelectedItem]
  );

  // Handle Input Field Change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter options based on input
    const filtered = options.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setHasMatch(filtered.length > 0);
    setIsOpen(true);
  };

  // Show all options when input is focused
  const handleInputFocus = () => {
    setFilteredOptions(options);
    setIsOpen(true);
    setHasMatch(true);
  };

  // Update inputValue when selectedItem changes
  useEffect(() => {
    if (selectedItem) {
      setInputValue(selectedItem.name);
    }
  }, [selectedItem]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <Input
        data-testid={dataTestId}
        label={label}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={handleInputFocus}
        iconRight={
          !isOpen ? (
            <ChevronDown className="h-4 w-4 opacity-50" />
          ) : (
            <ChevronUp className="h-4 w-4 opacity-50" />
          )
        }
        helperText={!hasMatch ? 'No match found' : ''}
      />

      {isOpen && (
        <div className="absolute bg-white border border-gray-300 rounded-md shadow-md z-10 p-2 max-h-[208px] overflow-y-auto w-full mt-1">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(option)}
                className={`${blocked ? 'block' : 'inline-block'} ${
                  option.id === selectedItem?.id ? 'bg-[#EFF0FF]' : ''
                } cursor-pointer rounded-md p-3 transition-colors duration-300 hover:bg-gray-50 h-[48px] w-full`}
              >
                {option.name}
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No matches found</div>
          )}
        </div>
      )}
    </div>
  );
};

export { ComboBox };
