import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./pageStyles.css";

function ResumePage() {
  return (
    <main className="site-page page-width">
      <Helmet>
        <title>Resume | Yanis Meichtry</title>
        <meta
          name="description"
          content="Resume overview of Yanis Meichtry with a link to the dedicated skills page branch."
        />
      </Helmet>

      <section className="page-hero">
        <span className="eyebrow">Resume</span>
        <h1>Resume overview</h1>
        <p>
          This branch keeps the main site build stable. The full skills overview lives on the
          dedicated `skills-page` branch.
        </p>
        <Link className="primary-link" to="/">
          Back to Home
        </Link>
      </section>
    </main>
  );
}

export default ResumePage;
