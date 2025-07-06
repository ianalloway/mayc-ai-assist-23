
export type MAYCItem = {
  id: string;
  title: string;
  url: string;
  type: string;
  createdDate: string;
  source: string;
  keywords: string[];
  pitch: string;
  aiPersonality: string;
  traits: string[];
};

export const maycItems: MAYCItem[] = [
  {
    id: '1',
    title: 'Alpha Mutant #4521',
    url: '/nft/alpha-mutant-4521',
    type: 'Alpha',
    createdDate: '2023-04-15',
    source: 'MAYC Collection',
    keywords: ['Alpha', 'Strategic', 'Leadership'],
    pitch: 'Strategic Alpha mutant specializing in market analysis and leadership',
    aiPersonality: 'Confident and analytical, loves taking charge of complex situations',
    traits: ['Laser Eyes', 'Gold Teeth', 'Bored Expression']
  },
  {
    id: '2',
    title: 'Mega Mutant #8732',
    url: '/nft/mega-mutant-8732',
    type: 'Mega',
    createdDate: '2023-05-22',
    source: 'MAYC Collection',
    keywords: ['Mega', 'Creative', 'Innovation'],
    pitch: 'Creative Mega mutant focused on innovative solutions and artistic vision',
    aiPersonality: 'Creative and imaginative, always thinking outside the box',
    traits: ['Rainbow Fur', 'Cyber Helmet', 'Paint Brush']
  },
  {
    id: '3',
    title: 'Toxic Mutant #2156',
    url: '/nft/toxic-mutant-2156',
    type: 'Toxic',
    createdDate: '2023-06-10',
    source: 'MAYC Collection',
    keywords: ['Toxic', 'Research', 'Analysis'],
    pitch: 'Analytical Toxic mutant specializing in deep research and data analysis',
    aiPersonality: 'Methodical and detail-oriented, loves diving deep into complex problems',
    traits: ['Toxic Waste', 'Lab Coat', 'Magnifying Glass']
  },
  {
    id: '4',
    title: 'Radioactive Mutant #9445',
    url: '/nft/radioactive-mutant-9445',
    type: 'Radioactive',
    createdDate: '2023-07-05',
    source: 'MAYC Collection',
    keywords: ['Radioactive', 'Strategy', 'Planning'],
    pitch: 'Strategic Radioactive mutant with expertise in long-term planning',
    aiPersonality: 'Forward-thinking and strategic, always planning three steps ahead',
    traits: ['Glowing Aura', 'Hazmat Suit', 'Nuclear Symbol']
  },
  {
    id: '5',
    title: 'Prismatic Mutant #6673',
    url: '/nft/prismatic-mutant-6673',
    type: 'Prismatic',
    createdDate: '2023-08-18',
    source: 'MAYC Collection',
    keywords: ['Prismatic', 'Development', 'Technology'],
    pitch: 'Tech-savvy Prismatic mutant focused on development and coding',
    aiPersonality: 'Logical and systematic, enjoys solving technical challenges',
    traits: ['Holographic Fur', 'VR Headset', 'Code Matrix']
  }
];

export const columns = [
  { id: 'title', name: 'NFT Name', sortable: true },
  { id: 'url', name: 'URL', sortable: false },
  { id: 'type', name: 'Mutant Type', sortable: true },
  { id: 'createdDate', name: 'Created Date', sortable: true },
  { id: 'keywords', name: 'Specialties', sortable: false },
  { id: 'source', name: 'Collection', sortable: true },
  { id: 'pitch', name: 'AI Description', sortable: false },
  { id: 'aiPersonality', name: 'Personality', sortable: true },
  { id: 'traits', name: 'Traits', sortable: false },
];
