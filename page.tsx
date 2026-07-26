import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { PostCard } from "@/components/post-card";
import { formatDate, getCategory, getPostBySlug, getRelatedPosts, posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

type PostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const relatedPosts = getRelatedPosts(post);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Steady Start" },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: category?.name,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="shell article-layout">
      <aside className="toc" aria-labelledby="toc-heading">
        <h2 id="toc-heading">On this page</h2>
        <ol>
          {post.sections.map((section) => (
            <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
          ))}
        </ol>
      </aside>
      <article>
        <header className="article-header">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/blog">Articles</Link><span aria-hidden="true">/</span>
            <Link href={`/blog#${post.category}`}>{category?.name}</Link>
          </nav>
          <p className="article-kicker">{category?.name}</p>
          <h1>{post.title}</h1>
          <p className="article-dek">{post.description}</p>
          <p className="byline">
            <span>By {post.author}</span>
            <span>{post.readingMinutes} min read</span>
            <span>Updated {formatDate(post.updatedAt)}</span>
          </p>
        </header>

        <ArticleBody post={post} />

        <section className="related" aria-labelledby="related-heading">
          <p className="eyebrow">Keep going</p>
          <h2 id="related-heading">Related beginner guides</h2>
          <div className="post-grid">
            {relatedPosts.map((relatedPost) => <PostCard post={relatedPost} key={relatedPost.slug} />)}
          </div>
        </section>

        <section className="sources" aria-labelledby="sources-heading">
          <h2 id="sources-heading">Sources and review note</h2>
          <p>
            This article is educational, not personal medical or nutrition advice. Read our <Link href="/terms-and-disclaimer">fitness and medical disclaimer</Link> before making changes related to a health condition or injury.
          </p>
          <ol>
            {post.citations.map((citation) => (
              <li key={citation.href}><a href={citation.href} rel="noreferrer">{citation.label}</a></li>
            ))}
          </ol>
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
