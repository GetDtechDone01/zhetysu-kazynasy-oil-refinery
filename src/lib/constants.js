/**
 * constants.js
 * Central source of truth for shared static data across the app.
 * Update company info, products, and services here — changes propagate everywhere.
 */

// ─── Company Information ───────────────────────────────────────────────────────
export const COMPANY = {
  name: 'LLP "ZHETYSU KAZYNASY"',
  subtitle: 'OIL REFINERY',
  bin: '050740001488',
  address: '050012, Almaty, Nursultan Nazarbayev Ave. Furmanova, 177, apt. 7, Almaty District, Republic of Kazakhstan',
  addressLines: [
    '050012, Almaty',
    'Nursultan Nazarbayev Ave.',
    'Furmanova, 177, apt. 7',
    'Almaty District, Kazakhstan',
  ],
  email: 'info@zhetysukazynasy-oil.kz',
  salesEmail: 'sales@zhetysukazynasy-oil.com',
  accountsEmail: 'accountdepartment@zhetysukazynasy-oil.com',
  phone: '+7 747 052 4475',
  phoneTel: '+77470524475',
  website: 'www.zhetysukazynasy-oil.kz',
  websiteUrl: 'https://www.zhetysukazynasy-oil.kz',
  head: 'Zhayshibekov Askar Kanybekovich',
  oked: 'Crude oil and associated gas production',
  founded: '2004',
};

// ─── Asset URLs ────────────────────────────────────────────────────────────────
export const LOGO_URL =
  'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/75616e06b_generated_a1354d0d.png';

// ─── Navigation Links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/service', label: 'Service' },
  { path: '/request-service', label: 'Request Service' },
];

// ─── Petroleum Products ────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    name: 'EN590 ULSD',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/00ea6e7a8_generated_d79b8b71.png',
    desc: 'Ultra Low Sulfur Diesel conforming to EN590 European Standard. Sulfur content max 10 ppm. Suitable for modern diesel engines and heavy machinery.',
  },
  {
    name: 'D2 Diesel Gas Oil',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/88aadeb93_generated_63c131f0.png',
    desc: 'D2 Diesel Gas Oil is a refined petroleum distillate suitable for diesel engines, industrial machinery, ships, and power generators.',
  },
  {
    name: 'Urea Fertiliser',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/531071dd8_generated_4d97ac95.png',
    desc: 'High-purity agricultural-grade Urea (46% nitrogen) in granular and prilled forms. Ideal for crop farming and large-scale agriculture.',
  },
  {
    name: 'D6 Virgin Fuel Oil',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/454adcc87_generated_ea7a40ee.png',
    desc: 'D6 Virgin Fuel Oil — a residual fuel primarily used for power plants, industrial furnaces, and large marine vessels.',
  },
  {
    name: 'Liquefied Petroleum Gas (LPG)',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/9f6d2ca02_generated_de99eb1f.png',
    desc: 'LPG includes propane and butane, used widely for heating, cooking, and vehicle fuel. Meets international purity and pressure standards.',
  },
  {
    name: 'Kazakhstan Crude Oil (KEBCO)',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/513451350_generated_e45b2e8b.png',
    desc: 'Kazakhstan Export Blend Crude Oil — a premium crude blend produced and exported from Kazakhstan for international refineries.',
  },
  {
    name: 'Fuel Oil',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/454adcc87_generated_ea7a40ee.png',
    desc: 'High-quality fuel oil from our refinery operations. Used in power generation, marine propulsion, and industrial heating.',
  },
  {
    name: 'CST-180',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/9a2b911a6_generated_442ddfb1.png',
    desc: 'CST-180 heavy fuel oil with 180 centistokes viscosity. Ideal for large marine engines, industrial boilers, and power plants.',
  },
  {
    name: 'Bitumen 60/70 & 80/100',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/9a2b911a6_generated_442ddfb1.png',
    desc: 'Penetration grade bitumen for road construction and waterproofing. Grades 60/70 and 80/100 meet all asphalt specifications.',
  },
  {
    name: 'Jet A1 Fuel',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/42ef3e544_generated_425e48fe.png',
    desc: 'Jet A-1 kerosene-type aviation turbine fuel meeting DEF STAN 91-091. Suitable for all commercial jet aircraft globally.',
  },
  {
    name: 'Aviation Kerosene (JP54)',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/42ef3e544_generated_425e48fe.png',
    desc: 'JP54 Aviation Kerosene — high-grade fuel for military and commercial aircraft. Meets NATO and FAA standards.',
  },
];

// ─── Service Types (for the request form dropdown) ─────────────────────────────
export const SERVICE_TYPES = [
  'EN590 ULSD',
  'D2 Diesel Gas Oil',
  'Urea Fertiliser',
  'D6 Virgin Fuel Oil',
  'Liquefied Petroleum Gas',
  'Kazakhstan Crude Oil (KEBCO)',
  'Fuel Oil',
  'CST-180',
  'Bitumen 60/70 & 80/100',
  'Jet A1 Fuel',
  'Aviation Kerosene (JP54)',
  'Other',
];

// ─── Operational Services ──────────────────────────────────────────────────────
export const SERVICES = [
  {
    title: 'Drilling Services',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/f77f8e8b3_generated_35435b94.png',
    desc: 'Advanced drilling technologies for oil and gas wells. Directional, horizontal, and vertical drilling with modern equipment.',
  },
  {
    title: 'Refinery Operations',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/aff65ea81_generated_a5caabec.png',
    desc: 'Full-cycle refinery services from crude oil processing to finished product delivery, meeting the highest international standards.',
  },
  {
    title: 'Pipeline Construction',
    img: 'https://media.base44.com/images/public/6a106c8a1a9a374d55e747f9/cefd6eb9f_generated_4a200000.png',
    desc: 'Design, construction, and maintenance of oil and gas pipeline infrastructure meeting international safety standards.',
  },
];

// ─── Static Exchange Ticker Data (reference prices, not live) ─────────────────
export const TICKER_ITEMS = [
  { label: 'Brent Crude',    price: '84.20', unit: '$/bbl', change: '+0.45', up: true  },
  { label: 'WTI Crude',      price: '80.15', unit: '$/bbl', change: '+0.38', up: true  },
  { label: 'KEBCO Crude',    price: '83.50', unit: '$/bbl', change: '+0.60', up: true  },
  { label: 'EN590 ULSD',     price: '760.00', unit: '$/MT', change: '-2.10', up: false },
  { label: 'D2 Gas Oil',     price: '710.00', unit: '$/MT', change: '+1.50', up: true  },
  { label: 'Jet A1 Fuel',    price: '790.00', unit: '$/MT', change: '-0.80', up: false },
  { label: 'JP54 Kerosene',  price: '785.00', unit: '$/MT', change: '+1.20', up: true  },
  { label: 'LPG Propane',    price: '510.00', unit: '$/MT', change: '-3.00', up: false },
  { label: 'Fuel Oil 180',   price: '395.00', unit: '$/MT', change: '+0.90', up: true  },
  { label: 'Urea Fertiliser',price: '295.00', unit: '$/MT', change: '-1.40', up: false },
  { label: 'Bitumen 60/70',  price: '450.00', unit: '$/MT', change: '+0.00', up: true  },
  { label: 'USD/KZT',        price: '452.30', unit: 'KZT',  change: '+1.20', up: false },
];

// ─── Certifications ────────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'Kazakhstan National Standards',
  'Republic of Kazakhstan Ministry of Energy Compliance',
];

// ─── Home Page Stats Bar ───────────────────────────────────────────────────────
export const STATS = [
  { value: '2004', label: 'Year Founded' },
  { value: '100%', label: 'Kazakhstan Owned' },
  { value: '20+',  label: 'Years Operating' },
  { value: 'ISO',  label: 'Certified Standards' },
];