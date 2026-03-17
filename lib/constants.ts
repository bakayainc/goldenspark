export const SITE_URL = 'https://www.goldensparkelectrical.com'
export const COMPANY_NAME = 'Golden Spark Electrical Contractors'
export const PHONE = '+16474661986'
export const PHONE_DISPLAY = '(647) 466-1986'
export const EMAIL = 'info@goldensparkelectrical.com'
export const LICENSE = 'ECRA/ESA #7018316'
export const ADDRESS_CITY = 'Toronto'
export const ADDRESS_PROVINCE = 'Ontario'
export const ADDRESS_COUNTRY = 'Canada'

export const GOLD = 'rgb(255, 192, 56)'
export const GOLD_DARK = 'rgb(220, 162, 20)'
export const GOLD_LIGHT = 'rgba(255, 192, 56, 0.12)'

export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  id: string
  name: string
  slug: string
  lpSlugPrefix: string
  shortDesc: string
  longDesc: string
  icon: string
  features: string[]
  faqs: ServiceFAQ[]
}

export interface Location {
  name: string
  slug: string
  region: string
  description: string
  neighborhoods: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'industrial-electrical',
    name: 'Industrial Electrical',
    slug: 'industrial-electrical',
    lpSlugPrefix: 'industrial-electrician',
    shortDesc: 'Heavy-duty electrical solutions for manufacturing plants, warehouses, and industrial facilities across the GTA.',
    longDesc: `Golden Spark delivers certified industrial electrical services for manufacturing plants, warehouses, processing facilities, and heavy commercial operations across the Greater Toronto Area. Our licensed electricians are experienced with complex 3-phase power systems, motor controls, programmable logic controllers (PLCs), and high-capacity panel installations. We prioritize safety, uptime, and regulatory compliance—so your operations never miss a beat.`,
    icon: '🏭',
    features: [
      '3-phase power installation & upgrades',
      'Motor control centres (MCC) installation',
      'Industrial panel upgrades & replacements',
      'Conduit & cable tray systems',
      'Emergency lighting & exit signs',
      'Electrical safety audits & ESA compliance',
      'PLC wiring & automation support',
      'Transformer installations',
      'Demand metering & energy efficiency',
      '24/7 emergency industrial service',
    ],
    faqs: [
      {
        q: 'Do you work with high-voltage industrial systems?',
        a: 'Yes. Our team is certified to work with high-voltage systems and 3-phase power infrastructure commonly found in manufacturing and processing facilities. All work meets Ontario Electrical Safety Code requirements.',
      },
      {
        q: 'Can you help with ESA compliance inspections?',
        a: 'Absolutely. We conduct comprehensive electrical safety audits and work directly with the Electrical Safety Authority (ESA) to ensure your facility meets all applicable codes and standards.',
      },
      {
        q: 'How quickly can you respond to industrial electrical emergencies?',
        a: 'We offer 24/7 emergency response for industrial clients. Our team understands that downtime costs money, so we prioritize rapid response to minimize disruption to your operations.',
      },
      {
        q: 'Do you install and service motor control centres?',
        a: 'Yes. We install, maintain, and upgrade motor control centres (MCCs), variable frequency drives (VFDs), and motor starters for industrial applications of all sizes.',
      },
      {
        q: 'Can Golden Spark handle a full facility electrical retrofit?',
        a: 'Yes. From design and permits to installation and inspection, we manage full-scope industrial electrical retrofits, including panel replacements, service upgrades, and rewiring projects.',
      },
    ],
  },
  {
    id: 'commercial-electrical',
    name: 'Commercial Electrical',
    slug: 'commercial-electrical',
    lpSlugPrefix: 'commercial-electrician',
    shortDesc: 'Professional electrical services for offices, retail spaces, restaurants, and commercial properties throughout the GTA.',
    longDesc: `Golden Spark provides end-to-end commercial electrical solutions for businesses across the Greater Toronto Area. Whether you're opening a new retail location, renovating an office, or upgrading an aging electrical system, our licensed electricians deliver reliable, code-compliant work on time and on budget. We serve property managers, general contractors, and business owners with a commitment to quality and professionalism.`,
    icon: '🏢',
    features: [
      'Tenant improvement & fit-out wiring',
      'Commercial panel upgrades',
      'Lighting design & LED retrofits',
      'Data centre & server room electrical',
      'Fire alarm system installation',
      'Emergency & exit lighting',
      'EV charging station installation',
      'Outdoor & signage lighting',
      'Restaurant & kitchen electrical',
      'Preventive maintenance programs',
    ],
    faqs: [
      {
        q: 'Do you pull permits for commercial electrical work?',
        a: 'Yes. All commercial work requiring permits is handled through the appropriate municipal and ESA channels. We manage the permitting process so you don\'t have to.',
      },
      {
        q: 'Can you work after hours to minimize disruption to our business?',
        a: 'Absolutely. We regularly schedule work during evenings and weekends to ensure your business operations aren\'t disrupted. Just let us know your requirements during the quote process.',
      },
      {
        q: 'Do you provide electrical services for restaurant fit-outs?',
        a: 'Yes. Restaurant electrical is a specialty. We handle high-amperage kitchen circuits, hood ventilation controls, walk-in cooler power, and full compliance with health and safety codes.',
      },
      {
        q: 'Can you install EV charging stations for a commercial parking lot?',
        a: 'Yes. We install Level 2 and DC fast chargers for commercial properties, offices, and multi-unit buildings. We work with all major EV charging brands and handle the full installation.',
      },
      {
        q: 'How long does a commercial panel upgrade take?',
        a: 'A typical commercial panel upgrade takes 1–2 days depending on the scope. We coordinate with your facility manager to minimize downtime and complete the work efficiently.',
      },
    ],
  },
  {
    id: 'residential-electrical',
    name: 'Residential Electrical',
    slug: 'residential-electrical',
    lpSlugPrefix: 'electrician',
    shortDesc: 'Trusted home electrical services for GTA homeowners — from panel upgrades to EV chargers and renovations.',
    longDesc: `Golden Spark is the GTA's trusted residential electrician. From panel upgrades and pot light installations to EV charger hookups and full home rewiring, our team delivers clean, code-compliant work with a friendly, professional attitude. We treat your home with respect—no mess, no shortcuts, and no hidden fees. Whether it's a quick fix or a major renovation, we're here for you.`,
    icon: '🏠',
    features: [
      'Electrical panel upgrades (100A–200A+)',
      'EV charger installation (Level 2)',
      'Pot light & lighting installation',
      'Knob-and-tube & aluminum wiring upgrades',
      'GFCI & AFCI outlet installation',
      'Basement & addition wiring',
      'Hot tub & pool electrical',
      'Generator hookups & transfer switches',
      'Smoke & CO detector installation',
      'Home electrical inspections',
    ],
    faqs: [
      {
        q: 'How do I know if I need an electrical panel upgrade?',
        a: 'Signs include frequently tripping breakers, flickering lights, a panel older than 25 years, or a 60-amp service (insufficient for modern homes). We offer free assessments to help you determine if an upgrade is needed.',
      },
      {
        q: 'Do you install EV chargers at home?',
        a: 'Yes. We install Level 2 EV chargers (240V) for all major vehicle brands. We handle the panel assessment, breaker installation, dedicated circuit, and charger mounting—a typical installation takes 2–4 hours.',
      },
      {
        q: 'Is knob-and-tube wiring dangerous?',
        a: 'Knob-and-tube wiring isn\'t inherently dangerous, but it lacks a ground wire, can\'t support modern electrical loads, and may void your home insurance. We recommend upgrading to modern wiring for safety and peace of mind.',
      },
      {
        q: 'Do you offer free estimates for residential work?',
        a: 'Yes. We offer free, no-obligation estimates for all residential electrical projects. Call us or submit a quote request and one of our licensed electricians will assess your needs.',
      },
      {
        q: 'How long does a 200-amp panel upgrade take?',
        a: 'A 200-amp panel upgrade typically takes 4–8 hours including the ESA permit and inspection coordination. There will be a brief power outage during the swap, which we keep as short as possible.',
      },
    ],
  },
  {
    id: 'spray-booth-systems',
    name: 'Spray Booth Systems',
    slug: 'spray-booth-systems',
    lpSlugPrefix: 'spray-booth-electrician',
    shortDesc: 'Specialized explosion-proof electrical systems for automotive, industrial, and commercial spray booth installations.',
    longDesc: `Golden Spark is one of the GTA's few electrical contractors with deep expertise in spray booth electrical systems. Spray booths require specialized explosion-proof wiring, dedicated high-capacity circuits, and strict compliance with NFPA 33 and the Ontario Fire Code. Our team installs, upgrades, and maintains electrical systems for automotive refinishing shops, industrial coating facilities, and custom fabricators.`,
    icon: '🚗',
    features: [
      'Explosion-proof wiring & fixtures',
      'Dedicated spray booth power circuits',
      'Exhaust fan & air make-up controls',
      'Lighting for cure & refinish applications',
      'NFPA 33 & Ontario Fire Code compliance',
      'Interlock systems & safety controls',
      'Infrared & UV curing system power',
      'Booth controller panel installation',
      'ESA inspection support',
      'Retrofit & upgrade of existing booths',
    ],
    faqs: [
      {
        q: 'Why does a spray booth need specialized electrical work?',
        a: 'Spray booths contain flammable vapours and require explosion-proof (Class I, Division 1 or 2) electrical components to prevent ignition. Standard wiring and fixtures cannot be used in these areas—specialized equipment and certified installation are required by law.',
      },
      {
        q: 'Do you work with all spray booth brands?',
        a: 'Yes. We work with all major spray booth manufacturers including Global Finishing Solutions, Spray Systems, and custom-built booths. We can install new systems or retrofit existing booths.',
      },
      {
        q: 'What permits are needed for a spray booth electrical installation?',
        a: 'Spray booth electrical requires an ESA permit and must comply with NFPA 33, the Ontario Electrical Safety Code, and the Ontario Fire Code. We handle all permit applications and coordinate inspections.',
      },
      {
        q: 'Can you install the lighting inside a spray booth?',
        a: 'Yes. We install explosion-proof fluorescent and LED lighting approved for use inside spray booths. Proper lighting is critical for colour matching and paint quality.',
      },
      {
        q: 'Do you service existing spray booth electrical systems?',
        a: 'Yes. We provide maintenance, troubleshooting, and upgrades for existing spray booth electrical systems. Regular maintenance ensures your booth operates safely and reliably.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    name: 'Electrical Troubleshooting',
    slug: 'troubleshooting',
    lpSlugPrefix: 'electrical-troubleshooting',
    shortDesc: 'Fast, accurate diagnosis and repair of electrical faults, tripping breakers, power outages, and wiring issues.',
    longDesc: `Electrical problems can be frustrating, disruptive, and potentially dangerous. Golden Spark's licensed electricians use systematic diagnostic techniques—including thermal imaging, circuit tracing, and load analysis—to pinpoint the root cause of your electrical issue quickly and accurately. We fix it right the first time so you're not dealing with the same problem again next week.`,
    icon: '🔍',
    features: [
      'Tripping breaker diagnosis & repair',
      'Dead outlet & circuit tracing',
      'Flickering & dimming light diagnosis',
      'Thermal imaging for hidden faults',
      'Ground fault & arc fault detection',
      'Overloaded circuit analysis',
      'Power quality & voltage issues',
      'Intermittent fault diagnosis',
      'Panel & wiring condition assessment',
      'Emergency electrical fault response',
    ],
    faqs: [
      {
        q: 'A breaker keeps tripping—is this dangerous?',
        a: 'A breaker that repeatedly trips is a sign of an overloaded circuit, short circuit, or ground fault. While the breaker is doing its job by tripping, the underlying cause needs to be diagnosed and fixed to prevent fire hazards.',
      },
      {
        q: 'My lights flicker occasionally—should I be concerned?',
        a: 'Occasional flickering can indicate loose connections, overloaded circuits, or issues with the utility supply. Persistent flickering should be investigated by a licensed electrician as loose connections are a leading cause of electrical fires.',
      },
      {
        q: 'How do you find the cause of an intermittent electrical fault?',
        a: 'We use a combination of thermal imaging cameras, circuit testers, load analyzers, and experience to track down intermittent faults. These are the toughest problems to solve, but our systematic approach finds the cause reliably.',
      },
      {
        q: 'Can you respond to electrical emergencies same day?',
        a: 'Yes. We offer same-day and 24/7 emergency electrical troubleshooting across the GTA. If you\'ve lost power, have a burning smell, or suspect a dangerous fault, call us immediately.',
      },
      {
        q: 'What\'s involved in an electrical inspection?',
        a: 'Our electrical inspection covers the service panel, visible wiring, outlets, switches, and grounding system. We provide a written report with findings and recommended repairs, prioritized by urgency.',
      },
    ],
  },
  {
    id: 'maintenance-repair',
    name: 'Maintenance & Repair',
    slug: 'maintenance-repair',
    lpSlugPrefix: 'electrical-maintenance',
    shortDesc: 'Preventive maintenance programs and fast repair services to keep your electrical systems running safely and reliably.',
    longDesc: `Proactive electrical maintenance prevents costly failures, extends the life of your equipment, and keeps your property safe. Golden Spark offers scheduled maintenance programs for commercial, industrial, and residential clients across the GTA. From thermographic inspections and panel testing to breaker maintenance and emergency repairs, we keep your electrical infrastructure in top condition year-round.`,
    icon: '🔧',
    features: [
      'Scheduled preventive maintenance programs',
      'Thermographic (infrared) inspections',
      'Breaker testing & maintenance',
      'Panel tightening & cleaning',
      'Emergency repair response',
      'Equipment testing & certification',
      'Lighting system maintenance',
      'Emergency generator testing',
      'Annual electrical safety reviews',
      'Service & maintenance contracts',
    ],
    faqs: [
      {
        q: 'How often should electrical systems be professionally inspected?',
        a: 'For commercial and industrial properties, we recommend annual inspections. Residential properties should be inspected every 3–5 years or after major renovations. Older properties with dated wiring may need more frequent checks.',
      },
      {
        q: 'What is thermographic inspection and why do I need it?',
        a: 'Thermographic inspection uses infrared cameras to detect heat anomalies in electrical panels and connections—often identifying problems before they become failures or fires. It\'s a non-invasive, highly effective diagnostic tool used in commercial and industrial maintenance.',
      },
      {
        q: 'Do you offer annual maintenance contracts?',
        a: 'Yes. We offer flexible maintenance contracts for commercial and industrial clients. A maintenance contract ensures priority service, scheduled inspections, and documentation for insurance and compliance purposes.',
      },
      {
        q: 'Can you perform electrical repairs while our facility is operating?',
        a: 'In many cases, yes. We work around your schedule and use techniques that minimize or eliminate downtime. For work requiring power shutdowns, we coordinate outage windows that minimize impact on your operations.',
      },
      {
        q: 'What\'s included in a panel maintenance service?',
        a: 'Panel maintenance includes torquing all connections to manufacturer specifications, cleaning and inspecting bus bars, testing breakers, checking for overloading, and documenting the panel condition. This reduces the risk of arc flash and connection failures.',
      },
    ],
  },
]

export const LOCATIONS: Location[] = [
  {
    name: 'Toronto',
    slug: 'toronto',
    region: 'GTA',
    description: "Ontario's largest city and Canada's financial hub",
    neighborhoods: ['Downtown Core', 'Midtown', 'East End', 'West End', 'Harbourfront'],
  },
  {
    name: 'Mississauga',
    slug: 'mississauga',
    region: 'GTA',
    description: "Ontario's third-largest city with major industrial and commercial corridors",
    neighborhoods: ['City Centre', 'Port Credit', 'Meadowvale', 'Malton', 'Erin Mills'],
  },
  {
    name: 'Brampton',
    slug: 'brampton',
    region: 'GTA',
    description: 'One of Canada\'s fastest-growing cities with significant industrial parks',
    neighborhoods: ['Downtown Brampton', 'Bramalea', 'Heart Lake', 'Springdale', 'Bram West'],
  },
  {
    name: 'Vaughan',
    slug: 'vaughan',
    region: 'GTA',
    description: 'A thriving municipality north of Toronto with growing commercial and industrial zones',
    neighborhoods: ['Vaughan Metropolitan Centre', 'Woodbridge', 'Maple', 'Thornhill', 'Kleinburg'],
  },
  {
    name: 'Markham',
    slug: 'markham',
    region: 'GTA',
    description: "Canada's high-tech capital with major corporate campuses and light industrial parks",
    neighborhoods: ['Old Markham Village', 'Unionville', 'Milliken Mills', 'Cornell', 'Boxgrove'],
  },
  {
    name: 'Richmond Hill',
    slug: 'richmond-hill',
    region: 'GTA',
    description: 'A growing community in York Region with diverse residential and commercial development',
    neighborhoods: ['Richmond Hill Centre', 'Oak Ridges', 'Jefferson', 'Mill Pond', 'Langstaff'],
  },
  {
    name: 'North York',
    slug: 'north-york',
    region: 'GTA',
    description: 'An urban district of Toronto with high-density residential towers and commercial strips',
    neighborhoods: ['North York Centre', 'Willowdale', 'Don Mills', 'Jane-Finch', 'Downsview'],
  },
  {
    name: 'Scarborough',
    slug: 'scarborough',
    region: 'GTA',
    description: 'Eastern district of Toronto with diverse industrial, commercial, and residential areas',
    neighborhoods: ['Scarborough Town Centre', 'Agincourt', 'Morningside', 'Malvern', 'Wexford'],
  },
  {
    name: 'Etobicoke',
    slug: 'etobicoke',
    region: 'GTA',
    description: 'Western district of Toronto with significant industrial corridors and established neighbourhoods',
    neighborhoods: ['Bloor West Village', 'The Kingsway', 'Rexdale', 'Islington', 'Long Branch'],
  },
  {
    name: 'Bolton',
    slug: 'bolton',
    region: 'Greater GTA',
    description: 'A growing town in Caledon with light industrial and commercial development',
    neighborhoods: ['Bolton East', 'Bolton West', 'Bolton North', 'Humber Station'],
  },
  {
    name: 'Barrie',
    slug: 'barrie',
    region: 'South Central Ontario',
    description: 'A vibrant city on Lake Simcoe with growing industrial and commercial sectors',
    neighborhoods: ['Downtown Barrie', 'Allandale', 'Holly', 'Innis-Shore', 'Painswick'],
  },
  {
    name: 'Alliston',
    slug: 'alliston',
    region: 'Simcoe County',
    description: 'Home to major automotive manufacturing and agricultural industries in Simcoe County',
    neighborhoods: ['Downtown Alliston', 'Industrial Park', 'Treetops', 'Bond Head'],
  },
  {
    name: 'Bradford',
    slug: 'bradford',
    region: 'South Simcoe',
    description: 'A fast-growing town in South Simcoe County with new residential and commercial development',
    neighborhoods: ['Bradford East', 'Bradford West', 'Holland Landing'],
  },
  {
    name: 'Newmarket',
    slug: 'newmarket',
    region: 'York Region',
    description: 'A major commercial and residential hub in York Region',
    neighborhoods: ['Downtown Newmarket', 'Gorham-College Manor', 'Summerhill Estates', 'Glenway'],
  },
  {
    name: 'Hamilton',
    slug: 'hamilton',
    region: 'Hamilton-Wentworth',
    description: "Canada's steel city with one of Ontario's largest industrial bases",
    neighborhoods: ['Downtown Hamilton', 'Stoney Creek', 'Dundas', 'Ancaster', 'Binbrook'],
  },
  {
    name: 'St. Catharines',
    slug: 'st-catharines',
    region: 'Niagara Region',
    description: 'Niagara Region\'s largest city with established manufacturing and commercial sectors',
    neighborhoods: ['Downtown St. Catharines', 'Port Dalhousie', 'Grantham', 'Merritton', 'Port Weller'],
  },
]

export function getLpSlug(service: Service, location: Location): string {
  return `${service.lpSlugPrefix}-${location.slug}`
}

export function getLpPageData(slug: string): { service: Service; location: Location } | null {
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      if (getLpSlug(service, location) === slug) {
        return { service, location }
      }
    }
  }
  return null
}
