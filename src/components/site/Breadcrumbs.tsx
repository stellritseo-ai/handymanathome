import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Generate JSON-LD BreadcrumbList schema
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://steamonwheelsnc.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": item.href.startsWith("http") ? item.href : `https://steamonwheelsnc.com${item.href}` } : {})
      }))
    ]
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full py-3.5 px-4 sm:px-6 lg:px-8 bg-slate-900/60 border-b border-slate-800/80 backdrop-blur-md ${className}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <ol className="mx-auto max-w-7xl flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Home className="h-3.5 w-3.5 text-sky-400" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-slate-600 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-semibold truncate max-w-[240px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
