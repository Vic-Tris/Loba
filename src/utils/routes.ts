/** Maps nav topic ids (modals / header) to full-page routes. */
export const TOPIC_ROUTES: Record<string, string> = {
  home: '/',
  services: '/services',
  about: '/about',
  pricing: '/pricing',
  quote: '/quote',
  faq: '/faq',
  contact: '/contact',
};

/** Resolve which nav topic is active from the current pathname. */
export function topicFromPath(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/quotes')) return 'quote';

  const entry = Object.entries(TOPIC_ROUTES).find(
    ([id, route]) => id !== 'home' && (pathname === route || pathname.startsWith(`${route}/`))
  );
  return entry?.[0] ?? 'home';
}
