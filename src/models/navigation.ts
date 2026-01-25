export interface NavLink {
  label: string;
  href: string;
  sublinks?: NavLink[];
}

export const navigationData: NavLink[] = [
  {
    label: 'Serviços',
    href: '/servicos',
    sublinks: [
      { label: 'Obras Industriais', href: '/servicos/obras-industriais' },
      { label: 'Obras Comerciais', href: '/servicos/obras-comerciais' },
      { label: 'Obras Hospitalares', href: '/servicos/obras-hospitalares' },
      { label: 'Hotelaria', href: '/servicos/hotelaria' },
      {
        label: 'Infraestrutura',
        href: '/servicos/infraestrutura',
        sublinks: [
          { label: 'Adutoras', href: '/servicos/infraestrutura/adutoras' },
          { label: 'Drenagem', href: '/servicos/infraestrutura/drenagem' },
          { label: 'Pavimentação', href: '/servicos/infraestrutura/pavimentacao' },
          { label: 'Redes de Energia', href: '/servicos/infraestrutura/redes-de-energia' },
          { label: 'Subestações', href: '/servicos/infraestrutura/subestacoes' },
          { label: 'Tubulações', href: '/servicos/infraestrutura/tubulacoes' },
          { label: 'Redes de Esgoto', href: '/servicos/infraestrutura/redes-de-esgoto' },
          { label: 'ETA', href: '/servicos/infraestrutura/eta' },
          { label: 'ETE', href: '/servicos/infraestrutura/ete' },
        ],
      },
      { label: 'Projetos de Engenharia', href: '/servicos/projetos-de-engenharia' },
      { label: 'Incorporação Imobiliária', href: '/servicos/incorporacao-imobiliaria' },
    ],
  },
  {
    label: 'Empresa',
    href: '/empresa',
    sublinks: [
      { label: 'Sobre', href: '/history' },
      { label: 'Valores', href: '/principles' },
      { label: 'Certificações', href: '/empresa/certificacoes' },
    ],
  },
  {
    label: 'Portfólio',
    href: '/portfolio',
  },
  {
    label: 'Contato',
    href: '/contact',
  },
];
