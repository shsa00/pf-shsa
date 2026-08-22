'use client';

import React from 'react';

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Window({ title, onClose, children }: WindowProps) {
  return (
    <div className="absolute top-16 left-32 w-80 sm:w-96 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-xl z-10">
      {/* Window Title Bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center text-xs font-bold">
        <span>{title}</span>
        <button
          onClick={onClose}
          className="bg-[#c0c0c0] text-black border border-t-white border-l-white border-b-black border-r-black px-1.5 font-mono text-xs hover:bg-red-500 hover:text-white"
        >
          X
        </button>
      </div>

      {/* Window Body */}
      <div className="p-4 bg-[#f0f0f0] text-black border border-gray-400 m-1">
        {children}
      </div>
    </div>
  );
}