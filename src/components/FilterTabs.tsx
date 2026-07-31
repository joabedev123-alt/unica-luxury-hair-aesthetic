import React from 'react';

export interface TabOption {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 md:gap-3 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-none border ${
              isActive
                ? 'bg-[#C9A14A] text-[#050505] border-[#C9A14A] shadow-gold-glow'
                : 'bg-[#0B0B0B] text-[#A6A6A6] border-[#1D1D1D] hover:border-[#C9A14A]/40 hover:text-[#D8B86A]'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
