import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="brand" href="/" aria-label="Steady Start home">
            Steady <span>Start</span>
          </Link>
          <p>
            Beginner-friendly fitness guidance for building a routine that feels useful in real life.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/blog">Articles</Link>
          <Link href="/start-here">Start here</Link>
          <Link href="/about">Editorial standards</Link>
          <Link href="/terms-and-disclaimer">Disclaimer</Link>
        </nav>
      </div>
    </footer>
  );
}
