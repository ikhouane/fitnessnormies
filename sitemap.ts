import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/start-here", "/about", "/terms-and-disclaimer"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-07-26"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [
    ...staticPages,
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
