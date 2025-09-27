export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intakesense',
    description: 'AI-powered recruitment platform with guaranteed placements in 12 days or it\'s free.',
    url: 'https://intakesense.com',
    logo: 'https://intakesense.com/logo.png',
    image: 'https://intakesense.com/logo.png',
    sameAs: [
      'https://twitter.com/intakesense',
      'https://linkedin.com/company/intakesense'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English']
    },
    foundingDate: '2024',
    knowsAbout: [
      'AI Recruitment',
      'Talent Acquisition',
      'Hiring Technology',
      'Recruitment Automation',
      'Candidate Matching'
    ],
    areaServed: 'Worldwide',
    serviceType: 'Recruitment Technology Platform',
    slogan: 'Guaranteed placements in 12 days or it\'s free',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Recruitment Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI-Powered Recruitment',
            description: 'Guaranteed candidate placement in 12 days'
          }
        }
      ]
    }
  };

  return <JsonLd data={organizationData} />;
}

export function WebsiteJsonLd() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Intakesense',
    url: 'https://intakesense.com',
    description: 'AI-powered recruitment platform with guaranteed placements',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://intakesense.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return <JsonLd data={websiteData} />;
}