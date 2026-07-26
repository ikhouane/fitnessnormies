import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our approach and editorial standards",
  description: "How Steady Start creates clear, responsible beginner fitness guidance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="simple-page section--white">
      <article className="narrow">
        <p className="eyebrow">About Steady Start</p>
        <h1>Fitness guidance that is clear, kind, and grounded.</h1>
        <p>
          Steady Start is for people who want to get moving without being sold a dramatic transformation. We focus on practical actions, plain language, and the kind of progress that can make room for work, family, energy changes, and ordinary life.
        </p>
        <h2>Our editorial standards</h2>
        <ul>
          <li>We explain what a recommendation is for, who it may help, and where its limits are.</li>
          <li>We avoid shame, appearance-based promises, crash plans, and claims of guaranteed results.</li>
          <li>Fitness, nutrition, and recovery articles cite credible public-health, academic, or professional sources when they make factual claims.</li>
          <li>We label articles with their publication and update dates and correct material errors when we find them.</li>
          <li>We do not provide individual medical diagnoses, treatment, or personalized nutrition prescriptions.</li>
        </ul>
        <h2>What we mean by beginner-friendly</h2>
        <p>
          You can choose the easier version, take more rest, start with one round, and return after a missed week. Those are not shortcuts; they are sensible ways to learn what works for you.
        </p>
      </article>
    </section>
  );
}
