import { Filter } from 'lucide-react';
import type { CompanyFilters } from '../types/company';

interface FilterBarProps {
  filters: CompanyFilters;
  onFilterChange: (key: keyof CompanyFilters, value: string) => void;
  industries: string[];
  countries: string[];
  revenues: string[];
}

export function FilterBar({
  filters,
  onFilterChange,
  industries,
  countries,
  revenues,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 text-slate-600 font-medium">
        <Filter className="w-5 h-5" />
        <span>Filters:</span>
      </div>

      <select
        value={filters.industry}
        onChange={(e) => onFilterChange('industry', e.target.value)}
        className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
      >
        <option value="all">All Industries</option>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>

      <select
        value={filters.country}
        onChange={(e) => onFilterChange('country', e.target.value)}
        className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
      >
        <option value="all">All Countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        value={filters.revenue}
        onChange={(e) => onFilterChange('revenue', e.target.value)}
        className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
      >
        <option value="all">All Revenue Ranges</option>
        {revenues.map((revenue) => (
          <option key={revenue} value={revenue}>
            {revenue}
          </option>
        ))}
      </select>
    </div>
  );
}
