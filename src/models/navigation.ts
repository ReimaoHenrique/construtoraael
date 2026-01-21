export interface NavLink {
  label: string;
  href: string;
  sublinks?: NavLink[];
}

export const navigationData: NavLink[] = [
  {
    label: 'People',
    href: '/people',
    sublinks: [
      { label: 'Our Culture', href: '/people/culture' },
      { label: 'Inclusion & Diversity', href: '/people/diversity' },
      { label: 'Alumni', href: '/people/alumni' },
      { label: 'Ethics', href: '/people/ethics' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    sublinks: [
      { label: 'Featured Projects', href: '/projects/featured' },
      { label: 'Infrastructure', href: '/projects/infrastructure' },
      { label: 'Energy', href: '/projects/energy' },
      { label: 'Defense & Space', href: '/projects/defense' },
    ],
  },
  {
    label: 'Approach',
    href: '/approach',
    sublinks: [
      { label: 'Expertise', href: '/approach/expertise' },
      { label: 'Sustainability', href: '/approach/sustainability' },
      { label: 'Innovation', href: '/approach/innovation' },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    sublinks: [
      { label: 'Professionals', href: '/careers/professionals' },
      { label: 'Early Career', href: '/careers/early-career' },
      { label: 'Life at Bechtel', href: '/careers/life-at-bechtel' },
    ],
  },
  {
    label: 'Suppliers',
    href: '/suppliers',
  },
  {
    label: 'Media',
    href: '/media',
    sublinks: [
      { label: 'News Releases', href: '/media/news' },
      { label: 'Media Contacts', href: '/media/contacts' },
    ],
  },
  {
    label: 'Impact Report',
    href: '/impact-report',
  },
  {
    label: 'History',
    href: '/history',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
