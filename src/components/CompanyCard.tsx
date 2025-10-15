import { Building2, MapPin, Users, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import type { Company } from '../types/company';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{company.name}</h3>
            <p className="text-sm text-slate-600">{company.industry}</p>
          </div>
        </div>
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <p className="text-slate-700 mb-4 line-clamp-2">{company.description}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">{company.location}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <Users className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">{company.employeeCount.toLocaleString()} employees</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">Founded {company.foundedYear}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <TrendingUp className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">{company.revenue}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          {company.country}
        </span>
      </div>
    </div>
  );
}
