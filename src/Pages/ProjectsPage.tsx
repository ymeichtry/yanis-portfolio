import { Helmet } from "react-helmet-async";
import Projects from "../Components/projects/Projects";
import "./pageStyles.css";

function ProjectsPage() {
  return (
    <main className="site-page page-width">
      <Helmet>
        <title>Projects | Yanis Meichtry</title>
        <meta
          name="description"
          content="Ausgewählte Projekte von Yanis Meichtry mit Tech-Stack, Links und Beschreibungen."
        />
      </Helmet>

      <Projects />
    </main>
  );
}

export default ProjectsPage;