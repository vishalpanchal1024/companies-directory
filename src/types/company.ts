export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  country: string;
  employeeCount: number;
  foundedYear: number;
  website: string;
  description: string;
  revenue: string;
}

export interface CompanyFilters {
  search: string;
  industry: string;
  country: string;
  revenue: string;
}

export type SortField = 'name' | 'foundedYear' | 'employeeCount';
export type SortOrder = 'asc' | 'desc';

export interface SortConfig {
  field: SortField;
  order: SortOrder;
}
