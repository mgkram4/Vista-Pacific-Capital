'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Breadcrumb {
  label: string;
  href: string;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter((part) => part);

  const breadcrumbs: Breadcrumb[] = pathParts.map((part, index) => {
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    const label = part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label };
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.label,
      item: `https://vistapacificcapital.com${breadcrumb.href}`,
    })),
  };

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 px-4 py-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <Link
              href={breadcrumb.href}
              className={
                index === breadcrumbs.length - 1
                  ? 'font-semibold text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }
              aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
            >
              {breadcrumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 