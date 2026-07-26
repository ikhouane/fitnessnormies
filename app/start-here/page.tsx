import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Start here",
  description: "A calm, practical route into beginner fitness: one workout, one meal habit, and one easy way to keep going.",
  alternates: { canonical: "/start-here" },
};

export default function StartHerePage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="start-heading">
        <div className="shell">
          <p className="eyebrow">Welcome to Steady Start</p>
          <h1 id="start-heading">You do not need a perfect plan to begin.</h1>
          <p>
            Start with one manageable action this week. The aim is to feel a little more capable—not to turn your entire life upside down.
          </p>
        </div>
      </section>
      <section className="section section--white">
        <div className="narrow">
          <div className="steps">
            <article className="step-card">
              <h2>Try one short workout</h2>
              <p>Practice a few foundational movements at a comfortable pace. One round is a complete workout.</p>
              <Link className="button button--secondary" href={`/blog/${posts[0].slug}`}>Read the workout</Link>
            </article>
            <article className="step-card">
              <h2>Support an ordinary meal</h2>
              <p>Add one satisfying element to a meal you already eat. No tracking, no food rules.</p>
              <Link className="button button--secondary" href={`/blog/${posts[1].slug}`}>Read the plate guide</Link>
            </article>
            <article className="step-card">
              <h2>Choose your easy return</h2>
              <p>Pick a 10-minute action you can do again even when the week becomes busy.</p>
              <Link className="button button--secondary" href={`/blog/${posts[2].slug}`}>Build the habit</Link>
            </article>
          </div>
          <aside className="callout" style={{ marginTop: "2rem" }}>
            <strong>Important:</strong> If you have an injury, health condition, are pregnant, or have been advised to limit activity, speak with a qualified clinician before starting a new exercise routine.
          </aside>
        </div>
      </section>
    </>
  );
}
