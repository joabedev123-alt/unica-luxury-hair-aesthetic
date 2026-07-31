import React from 'react';

interface GoldDividerProps {
  className?: string;
  showDiamond?: boolean;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  showDiamond = true,
}) => {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`}>
      <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent opacity-60" />
      {showDiamond && (
        <div className="mx-3 text-[#C9A14A] text-xs flex items-center justify-center transform rotate-45 border border-[#C9A14A]/40 w-2.5 h-2.5 bg-[#050505]">
          <div className="w-1 h-1 bg-[#D8B86A]" />
        </div>
      )}
      <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent opacity-60" />
    </div>
  );
};
