import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Steady Start home">
          Steady <span>Start</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/blog">Articles</Link>
          <Link href="/about">Our approach</Link>
          <Link className="nav-cta" href="/start-here">
            Start here
          </Link>
        </nav>
      </div>
    </header>
  );
}
