import React from 'react';
import { ViewCounter } from './ViewCounter';

export const ViewIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse-slow"></div>
      <div className="mt-1">
        <ViewCounter />
      </div>
    </div>
  );
};
