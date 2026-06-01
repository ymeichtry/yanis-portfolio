import React from 'react';
import { Helmet } from 'react-helmet-async';
import MyProfile from "../Components/myprofile/MyProfile";
import "./pageStyles.css";

function Homepage() {
  return (
    <main className="site-page home-page">
      <Helmet>
        <title>Yanis Meichtry | Developer Portfolio</title>
        <meta name="description" content="Portfolio von Yanis Meichtry mit ausgewählten Projekten, Skills und Kontaktmöglichkeiten." />
        <link rel="canonical" href="https://yanis.meichtry.dev/" />

        {/* OpenGraph */}
        <meta property="og:title" content="Yanis Meichtry | Developer Portfolio" />
        <meta property="og:description" content="Portfolio von Yanis Meichtry mit ausgewählten Projekten, Skills und Kontaktmöglichkeiten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yanis.meichtry.dev/" />
        <meta property="og:image" content="/img/pfp4.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yanis Meichtry | Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio von Yanis Meichtry mit ausgewählten Projekten, Skills und Kontaktmöglichkeiten." />
        <meta name="twitter:image" content="/img/pfp4.webp" />

        {/* JSON-LD Person schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yanis Meichtry",
            "url": "https://yanis.meichtry.dev/",
            "image": "https://yanis.meichtry.dev/img/pfp4.webp",
            "sameAs": [
              "https://github.com/ymeichtry"
            ],
            "jobTitle": "Application Developer",
            "description": "Hello world! I'm Yanis Meichtry, a developer on a mission from Zürich (Switzerland)"
          }`}
        </script>
      </Helmet>
      <MyProfile />
    </main>
  );
}

export default Homepage;
