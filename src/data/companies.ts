export interface Company {
  name: string;
  domain: string;
  industry?: string;
}

export const companies: Company[] = [
  { name: 'Deloitte', domain: 'deloitte.com', industry: 'Technology' },
  { name: 'BlackRock', domain: 'blackrock.com', industry: 'Software' },
  { name: 'Blackstone', domain: 'blackstone.com', industry: 'E-commerce & Cloud' },
  { name: 'Federal Reserve', domain: 'federalreserve.gov', industry: 'Technology' },
  { name: 'Target', domain: 'target.com', industry: 'Technology' },
  { name: 'American Express', domain: 'americanexpress.com', industry: 'Software' },
  { name: 'VISA', domain: 'visa.com', industry: 'Software' },
  { name: 'Shell Oil', domain: 'shell.com', industry: 'Networking' },
  { name: 'Marks & Spencer', domain: 'marksandspencer.com', industry: 'Semiconductors' },
  { name: 'BBC', domain: 'bbc.com', industry: 'Technology' },
  { name: 'National Geospatial Intelligence Agency', domain: 'nga.mil', industry: 'Technology' },
  { name: 'InMarket Media', domain: 'inmarket.com', industry: 'Virtualization' },
  { name: 'Harness', domain: 'goharness.com', industry: 'Consulting' },
  { name: 'Capgemini', domain: 'capgemini.com', industry: 'IT Services' },
  { name: 'EvolutionIQ', domain: 'evolutioniq.com', industry: 'IT Services' },
  ];


// Note: To fetch industry data from Clearbit's Enrichment API (requires API key):
// const response = await fetch(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
//   headers: { 'Authorization': `Bearer ${CLEARBIT_API_KEY}` }
// });
// const data = await response.json();
// company.industry = data.category.industry;