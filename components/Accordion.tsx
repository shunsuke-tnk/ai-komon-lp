import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-orange-100 last:border-0">
      <button
        className="w-full py-5 px-4 flex items-center justify-between text-left focus:outline-none group hover:bg-orange-50/50 transition-colors rounded-lg"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-slate-700 group-hover:text-orange-600 transition-colors">{title}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};