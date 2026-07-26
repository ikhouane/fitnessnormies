const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// Keep local previews self-contained. Set NEXT_PUBLIC_SITE_URL in production.
export const siteUrl = (configuredSiteUrl || "http://localhost:3000").replace(/\/$/, "");

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}
