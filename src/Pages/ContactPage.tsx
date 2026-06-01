import { Helmet } from "react-helmet-async";
import ContactMe from "../Components/contactMe/ContactMe";
import "./pageStyles.css";

function ContactPage() {
  return (
    <main className="site-page page-width contact-page">
      <Helmet>
        <title>Contact | Yanis Meichtry</title>
        <meta
          name="description"
          content="Kontaktseite von Yanis Meichtry mit E-Mail, Social Links und direktem Kontaktformular-Einstieg."
        />
      </Helmet>

      <ContactMe />
    </main>
  );
}

export default ContactPage;