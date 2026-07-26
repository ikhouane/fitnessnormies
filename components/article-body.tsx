import Link from "next/link";
import type { Post } from "@/lib/posts";

export function ArticleBody({ post }: { post: Post }) {
  return (
    <div className="article-body">
      <aside className="quick-start" aria-labelledby="quick-start-heading">
        <h2 id="quick-start-heading">Try this today</h2>
        <ul>
          {post.quickStart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>

      {post.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {section.callout ? (
            <aside className="callout">
              <strong>{section.callout.label}: </strong>
              {section.callout.text}
            </aside>
          ) : null}
        </section>
      ))}

      <p>
        Looking for a calm next step? Visit <Link href="/start-here">Start Here</Link> for a simple
        beginner pathway.
      </p>
    </div>
  );
}
