import companiesData from '../data/companies.json';
import type { Company, CompanyFilters, SortConfig } from '../types/company';

export function getFilteredAndSortedCompanies(
  filters: CompanyFilters,
  sort: SortConfig
): Company[] {
  let companies = [...companiesData] as Company[];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    companies = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(searchLower) ||
        company.description.toLowerCase().includes(searchLower) ||
        company.location.toLowerCase().includes(searchLower)
    );
  }

  if (filters.industry && filters.industry !== 'all') {
    companies = companies.filter((company) => company.industry === filters.industry);
  }

  if (filters.country && filters.country !== 'all') {
    companies = companies.filter((company) => company.country === filters.country);
  }

  if (filters.revenue && filters.revenue !== 'all') {
    companies = companies.filter((company) => company.revenue === filters.revenue);
  }

  companies.sort((a, b) => {
    let aValue = a[sort.field];
    let bValue = b[sort.field];

    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = (bValue as string).toLowerCase();
    }

    if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
    if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
    return 0;
  });

  return companies;
}

export function getUniqueIndustries(): string[] {
  const industries = [...new Set(companiesData.map((c) => c.industry))];
  return industries.sort();
}

export function getUniqueCountries(): string[] {
  const countries = [...new Set(companiesData.map((c) => c.country))];
  return countries.sort();
}

export function getUniqueRevenues(): string[] {
  const revenues = [...new Set(companiesData.map((c) => c.revenue))];
  return revenues.sort();
}
