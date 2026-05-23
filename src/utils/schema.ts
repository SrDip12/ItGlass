import { contact, coverage } from '../data/site';

const baseUrl = 'https://www.itglass.cl';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: contact.businessName,
  url: baseUrl,
  telephone: contact.phoneDisplay,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Balmaceda 67',
    addressLocality: 'Lampa',
    addressRegion: 'Region Metropolitana',
    addressCountry: 'CL'
  },
  areaServed: coverage.map((name) => ({
    '@type': name.includes('Region') ? 'AdministrativeArea' : 'City',
    name
  })),
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: []
};

export function serviceSchema(service: {
  title: string;
  summary: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: contact.businessName,
      telephone: contact.phoneDisplay
    },
    areaServed: 'Region Metropolitana de Santiago',
    url: `${baseUrl}/servicios/${service.slug}/`
  };
}

export function blogPostSchema(post: {
  title: string;
  summary: string;
  slug: string;
  date: string;
  updated?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      '@type': 'Organization',
      name: contact.businessName
    },
    publisher: {
      '@type': 'Organization',
      name: contact.businessName
    },
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}/`
  };
}

export function faqPageSchema(
  items: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}
