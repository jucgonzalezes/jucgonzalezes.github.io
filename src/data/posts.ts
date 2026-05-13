export type PostState = 'published' | 'forthcoming';

export interface Post {
  slug: string;
  title: string;
  abstract: string;
  date: string; // ISO YYYY-MM-DD
  state: PostState;
  figLabel?: string;
  figName?: string;
}

export const posts: Post[] = [
  {
    slug: 'reading-flow-fields',
    title: 'Reading flow fields',
    abstract:
      'A short essay on vector fields as scientific instruments: what a sparse grid of arrows can reveal about continuous motion, and where the abstraction breaks down.',
    date: '2026-06-15',
    state: 'forthcoming',
    figLabel: 'Fig. 01',
    figName: 'Slow flow field',
  },
  {
    slug: 'shapes-of-superposition',
    title: 'Shapes of superposition',
    abstract:
      'Notes on the perceptual rhythm of stacked sinusoids: how phase, frequency, and amplitude resolve into something the eye reads as continuous form.',
    date: '2026-07-08',
    state: 'forthcoming',
    figLabel: 'Fig. 02',
    figName: 'Traveling wave stack',
  },
];

export function postHref(post: Post, base: string): string {
  // Forthcoming posts route to the blog index rather than a non-existent entry.
  if (post.state === 'forthcoming') return `${base}blog`;
  return `${base}blog/${post.slug}`;
}

export interface PostYearGroup {
  year: number;
  posts: Post[];
}

export function postsByYear(items: Post[]): PostYearGroup[] {
  const buckets = new Map<number, Post[]>();
  for (const p of items) {
    const year = Number(p.date.slice(0, 4));
    const existing = buckets.get(year);
    if (existing) existing.push(p);
    else buckets.set(year, [p]);
  }
  return Array.from(buckets.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, ps]) => ({
      year,
      posts: ps.sort((a, b) => b.date.localeCompare(a.date)),
    }));
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
