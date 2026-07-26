import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { categories, posts } from "@/lib/posts";

const categoryAccents = ["01", "02", "03", "04", "05"];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Fitness for real life</p>
            <h1 id="home-heading">Build strength, energy, and a routine you can keep.</h1>
            <p>
              Steady Start is beginner-friendly fitness guidance without the pressure. Find simple
              workouts, practical food basics, and small habits that help you feel more at home in
              your body.
            </p>
            <div className="button-row">
              <Link className="button" href="/start-here">
                Find your first step
              </Link>
              <Link className="button button--secondary" href="/blog">
                Browse the articles
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art__card">
              <span className="eyebrow">Your first week</span>
              <strong>One small workout. One steady habit.</strong>
              <p>That is enough to begin.</p>
            </div>
            <div className="hero-art__badge">Progress, not punishment</div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our editorial promise">
        <div className="shell">
          <ul className="trust-list">
            <li><span>Clear:</span> plain language, no jargon required</li>
            <li><span>Practical:</span> built for ordinary days and limited time</li>
            <li><span>Responsible:</span> no miracle promises or shame</li>
          </ul>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="topics-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Learn at your pace</p>
            <h2 id="topics-heading">A more useful place to start</h2>
            <p>
              Explore the building blocks of a sustainable routine. You only need to choose one
              place to begin.
            </p>
          </div>
          <div className="card-grid">
            {categories.map((category, index) => (
              <Link className="category-card" href={`/blog#${category.slug}`} key={category.slug}>
                <span className="category-card__number">{categoryAccents[index]}</span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span>Explore {category.name.toLowerCase()} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
            <Link className="category-card" href="/start-here">
              <span className="category-card__number">04</span>
              <h3>Recovery</h3>
              <p>Rest, sleep, and staying responsive to how your body feels.</p>
              <span>Coming next</span>
            </Link>
            <Link className="category-card" href="/start-here">
              <span className="category-card__number">05</span>
              <h3>Fitness basics</h3>
              <p>Simple explanations that make the gym and movement feel less mysterious.</p>
              <span>Coming next</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--sage" aria-labelledby="pathway-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">A gentle pathway</p>
            <h2 id="pathway-heading">Start small. Build from there.</h2>
            <p>There is no need to overhaul your routine. These three steps work together.</p>
          </div>
          <div className="steps">
            <article className="step-card">
              <h3>Move in a way that feels manageable</h3>
              <p>Choose a short workout that lets you learn the basics without draining your week.</p>
              <Link href={`/blog/${posts[0].slug}`}>Try the beginner workout</Link>
            </article>
            <article className="step-card">
              <h3>Make meals a little more supportive</h3>
              <p>Use a flexible plate, not a rigid rule, to make food feel more satisfying.</p>
              <Link href={`/blog/${posts[1].slug}`}>See the plate guide</Link>
            </article>
            <article className="step-card">
              <h3>Keep the next step easy to return to</h3>
              <p>Give your routine a small default for busy days instead of starting over each time.</p>
              <Link href={`/blog/${posts[2].slug}`}>Build a 10-minute habit</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="latest-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Start with these</p>
            <h2 id="latest-heading">Practical guides for your first few weeks</h2>
          </div>
          <div className="post-grid">
            {posts.map((post) => <PostCard post={post} key={post.slug} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow" style={{ color: "#c5ddd4" }}>A calmer way forward</p>
              <h2>Not sure where to begin?</h2>
              <p>Follow the beginner pathway and choose one small action for this week.</p>
            </div>
            <Link className="button" href="/start-here">Go to Start Here</Link>
          </div>
        </div>
      </section>
    </>
  );
}
