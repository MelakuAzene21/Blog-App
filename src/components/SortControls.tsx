import React from 'react';
import { SortAsc, SortDesc, Clock, TrendingUp } from 'lucide-react';
import { SortOption } from '../types/blog';

interface SortControlsProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultsCount: number;
  searchQuery?: string;
  selectedCategory?: string;
}

const SortControls: React.FC<SortControlsProps> = ({ 
  sortBy, 
  onSortChange, 
  resultsCount, 
  searchQuery, 
  selectedCategory 
}) => {
  const getSortIcon = (option: SortOption) => {
    switch (option) {
      case 'latest':
        return <SortDesc className="w-4 h-4" />;
      case 'oldest':
        return <SortAsc className="w-4 h-4" />;
      case 'popular':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getSortLabel = (option: SortOption) => {
    switch (option) {
      case 'latest':
        return 'Latest';
      case 'oldest':
        return 'Oldest';
      case 'popular':
        return 'Popular';
      default:
        return 'Latest';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">
          {resultsCount} article{resultsCount !== 1 ? 's' : ''} found
          {searchQuery && (
            <span className="ml-1">
              for "<span className="font-semibold text-blue-600">{searchQuery}</span>"
            </span>
          )}
          {selectedCategory && (
            <span className="ml-1">
              in <span className="font-semibold text-blue-600">{selectedCategory}</span>
            </span>
          )}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {(['latest', 'popular', 'oldest'] as SortOption[]).map((option) => (
            <button
              key={option}
              onClick={() => onSortChange(option)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                sortBy === option
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {getSortIcon(option)}
              <span>{getSortLabel(option)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortControls;