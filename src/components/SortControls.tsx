import { ArrowUpDown } from 'lucide-react';
import type { SortConfig, SortField } from '../types/company';

interface SortControlsProps {
  sort: SortConfig;
  onSortChange: (sort: SortConfig) => void;
}

export function SortControls({ sort, onSortChange }: SortControlsProps) {
  const handleFieldChange = (field: SortField) => {
    if (sort.field === field) {
      onSortChange({ ...sort, order: sort.order === 'asc' ? 'desc' : 'asc' });
    } else {
      onSortChange({ field, order: 'asc' });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-slate-600 font-medium">
        <ArrowUpDown className="w-5 h-5" />
        <span>Sort by:</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleFieldChange('name')}
          className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
            sort.field === 'name'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Name {sort.field === 'name' && (sort.order === 'asc' ? '↑' : '↓')}
        </button>

        <button
          onClick={() => handleFieldChange('founded_year')}
          className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
            sort.field === 'founded_year'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Year {sort.field === 'founded_year' && (sort.order === 'asc' ? '↑' : '↓')}
        </button>

        <button
          onClick={() => handleFieldChange('employee_count')}
          className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
            sort.field === 'employee_count'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Size {sort.field === 'employee_count' && (sort.order === 'asc' ? '↑' : '↓')}
        </button>
      </div>
    </div>
  );
}
