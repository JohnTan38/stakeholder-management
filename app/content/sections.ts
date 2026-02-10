export type NavItem = {
  href: string
  label: string
  description: string
}

export const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Thematic Bridge',
    description: 'Strategic consistency overview'
  },
  {
    href: '/overview',
    label: 'Research Summary',
    description: 'Objective, methods, and sample'
  },
  {
    href: '/stakeholders',
    label: 'Stakeholder Map',
    description: 'External and internal stakeholders'
  },
  {
    href: '/engagement',
    label: 'Engagement Metrics',
    description: 'Tracking and communication plan'
  },
  {
    href: '/theory',
    label: 'Theory and Reflection',
    description: 'Networking and key learning points'
  },
  {
    href: '/resources',
    label: 'Resources',
    description: 'Downloads and infographic'
  }
]

export type SearchItem = {
  title: string
  description: string
  route: string
  anchor?: string
  tags: string[]
}

export const searchIndex: SearchItem[] = [
  {
    title: 'Thematic Bridge',
    description: 'Consistent theme aligning stakeholder expectations.',
    route: '/',
    anchor: 'thematic-bridge',
    tags: ['theme', 'consistency', 'bridge']
  },
  {
    title: 'Research Objective',
    description: 'How relationship practices relate to effectiveness.',
    route: '/overview',
    anchor: 'objective',
    tags: ['objective', 'research', 'effectiveness']
  },
  {
    title: 'Data Collection Methods',
    description: 'Interviews and checklist questionnaire methods.',
    route: '/overview',
    anchor: 'methods',
    tags: ['methods', 'interviews', 'questionnaire']
  },
  {
    title: 'Sample Groups',
    description: 'Three nonprofits and external evaluators.',
    route: '/overview',
    anchor: 'sample',
    tags: ['sample', 'npo', 'evaluators']
  },
  {
    title: 'Research Question',
    description: 'Positive correlation between stakeholder management and effectiveness.',
    route: '/overview',
    anchor: 'research-question',
    tags: ['question', 'correlation']
  },
  {
    title: 'External Stakeholders',
    description: 'Funders, volunteers, clients, government officers.',
    route: '/stakeholders',
    anchor: 'external-stakeholders',
    tags: ['funders', 'volunteers', 'clients', 'government']
  },
  {
    title: 'Internal Stakeholders',
    description: 'Executive director and senior management.',
    route: '/stakeholders',
    anchor: 'internal-stakeholders',
    tags: ['internal', 'leadership']
  },
  {
    title: 'Engagement Metrics',
    description: 'Desired vs actual engagement levels and gaps.',
    route: '/engagement',
    anchor: 'metrics',
    tags: ['metrics', 'tracking', 'effectiveness']
  },
  {
    title: 'Communication Plan',
    description: 'Board, community members, volunteers cadence.',
    route: '/engagement',
    anchor: 'communication',
    tags: ['communication', 'plan', 'cadence']
  },
  {
    title: 'Networking',
    description: 'Residential Children Center stakeholder relationships.',
    route: '/theory',
    anchor: 'networking',
    tags: ['networking', 'relationships']
  },
  {
    title: 'Reflection Points',
    description: 'Friedman, Freeman, and Principle 1 insights.',
    route: '/theory',
    anchor: 'reflection',
    tags: ['reflection', 'theory', 'learning']
  },
  {
    title: 'Downloads',
    description: 'PDFs and visual assets.',
    route: '/resources',
    anchor: 'downloads',
    tags: ['downloads', 'pdf']
  },
  {
    title: 'Infographic',
    description: 'Strategic consistency visual reference.',
    route: '/resources',
    anchor: 'infographic',
    tags: ['infographic', 'visual']
  }
]
