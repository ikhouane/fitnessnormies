import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { categories, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Fitness articles for beginners",
  description:
    "Beginner-friendly guides to workouts, flexible nutrition basics, and habits that make fitness more consistent.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="blog-heading">
        <div className="shell">
          <p className="eyebrow">The Steady Start library</p>
          <h1 id="blog-heading">Fitness guidance you can put into practice today.</h1>
          <p>
            Clear, non-judgmental articles for getting moving, eating well enough, and building a
            routine that can flex with your life.
          </p>
        </div>
      </section>
      <section className="section section--white" aria-label="All fitness articles">
        <div className="shell">
          <p className="filter-note">Browse by topic or read the guides in any order.</p>
          {categories.map((category) => {
            const categoryPosts = posts.filter((post) => post.category === category.slug);
            return (
              <section id={category.slug} key={category.slug} aria-labelledby={`${category.slug}-heading`}>
                <div className="section-heading" style={{ marginTop: "2.5rem" }}>
                  <p className="eyebrow">{category.name}</p>
                  <h2 id={`${category.slug}-heading`}>{category.description}</h2>
                </div>
                {categoryPosts.length ? (
                  <div className="post-grid">{categoryPosts.map((post) => <PostCard post={post} key={post.slug} />)}</div>
                ) : (
                  <p>New beginner guides are on their way.</p>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
