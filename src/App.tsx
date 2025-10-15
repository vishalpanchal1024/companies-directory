import { Building2 } from 'lucide-react';
import { useCompanies } from './hooks/useCompanies';
import { SearchInput } from './components/SearchInput';
import { FilterBar } from './components/FilterBar';
import { SortControls } from './components/SortControls';
import { CompanyCard } from './components/CompanyCard';
import { Pagination } from './components/Pagination';
import { EmptyState } from './components/EmptyState';

function App() {
  const {
    companies,
    filters,
    sort,
    currentPage,
    totalPages,
    totalCompanies,
    industries,
    countries,
    revenues,
    updateFilters,
    updateSort,
    setCurrentPage,
  } = useCompanies();

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    updateFilters({ ...filters, [key]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Companies Directory</h1>
              <p className="text-slate-600">Discover and explore companies worldwide</p>
            </div>
          </div>

          <div className="space-y-4">
            <SearchInput
              value={filters.search}
              onChange={(value) => handleFilterChange('search', value)}
            />

            <div className="flex flex-wrap gap-4 items-start">
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                industries={industries}
                countries={countries}
                revenues={revenues}
              />

              <div className="ml-auto">
                <SortControls sort={sort} onSortChange={updateSort} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {companies.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalCompanies}
              itemsPerPage={9}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
