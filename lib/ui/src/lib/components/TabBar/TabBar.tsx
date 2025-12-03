import React from 'react';

interface TabBarProps {
  tabs: string[];
  selectedTab: string;
  onTabClick: (tab: string) => void;
  className?: string;
}

const TabBar: React.FC<TabBarProps> = ({
  tabs,
  selectedTab,
  className = '',
  onTabClick,
}) => (
  <div className={`flex w-full border-b border-[#C2C5D9] ${className}`}>
    {tabs.map((tab) => (
      <button
        key={tab}
        className="mr-4 py-2 hover:bg-gray-50 relative flex flex-col items-center"
        onClick={() => onTabClick(tab)}
      >
        <span
          className={`${
            selectedTab === tab ? 'text-blue-600' : 'text-gray-600'
          } text-left`}
        >
          {tab}
        </span>
        {selectedTab === tab && (
          <div className="absolute bottom-0 h-0.5 bg-blue-600">
            <span className="invisible whitespace-nowrap">{tab}</span>
          </div>
        )}
      </button>
    ))}
  </div>
);

export { TabBar };
