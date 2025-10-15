import { useState, useMemo } from 'react';
import {
  getFilteredAndSortedCompanies,
  getUniqueIndustries,
  getUniqueCountries,
  getUniqueRevenues,
} from '../services/companyService';
import type { Company, CompanyFilters, SortConfig } from '../types/company';

const ITEMS_PER_PAGE = 9;

const INITIAL_FILTERS: CompanyFilters = {
  search: '',
  industry: 'all',
  country: 'all',
  revenue: 'all',
};

const INITIAL_SORT: SortConfig = {
  field: 'name',
  order: 'asc',
};

export function useCompanies() {
  const [filters, setFilters] = useState<CompanyFilters>(INITIAL_FILTERS);
  const [sort, setSort] = useState<SortConfig>(INITIAL_SORT);
  const [currentPage, setCurrentPage] = useState(1);

  const industries = useMemo(() => getUniqueIndustries(), []);
  const countries = useMemo(() => getUniqueCountries(), []);
  const revenues = useMemo(() => getUniqueRevenues(), []);

  const allFilteredCompanies = useMemo(
    () => getFilteredAndSortedCompanies(filters, sort),
    [filters, sort]
  );

  const totalPages = Math.ceil(allFilteredCompanies.length / ITEMS_PER_PAGE);

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allFilteredCompanies.slice(startIndex, endIndex);
  }, [allFilteredCompanies, currentPage]);

  const updateFilters = (newFilters: CompanyFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const updateSort = (newSort: SortConfig) => {
    setSort(newSort);
    setCurrentPage(1);
  };

  return {
    companies: paginatedCompanies,
    filters,
    sort,
    currentPage,
    totalPages,
    totalCompanies: allFilteredCompanies.length,
    industries,
    countries,
    revenues,
    updateFilters,
    updateSort,
    setCurrentPage,
  };
}
