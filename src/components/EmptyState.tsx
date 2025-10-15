import { Building2 } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <Building2 className="w-10 h-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">No companies found</h3>
      <p className="text-slate-600 text-center max-w-md">
        Try adjusting your filters or search terms to find what you're looking for.
      </p>
    </div>
  );
}
