import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Router-Link für Navigation
import Navbar from "../components/navbar/Navbar";
import Mobilenav from "../components/navbar/Mobilenav";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [themeChange, setThemeChange] = useState(false);
  const [Theme, setTheme] = useState("dark");

  const nightLightMode = () => {
    setThemeChange(true);

    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    const mobilesun = document.querySelector("#mobilesun");
    const mobilemoon = document.querySelector("#mobilemoon");

    if (Theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (Theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    
    moon?.classList.toggle("block");
    sun?.classList.toggle("none");
    mobilemoon?.classList.toggle("block");
    mobilesun?.classList.toggle("none");
  };

  useEffect(() => {
    const examplePosts = [
      { id: 1, title: "First Blog Post", content: "This is my first post.", date: "2023-10-01" },
      { id: 2, title: "Second Blog Post", content: "This is my second post with more details.", date: "2023-11-01" },
    ];
    setPosts(examplePosts);

    setThemeChange(false);
    setTheme(localStorage.getItem("theme") || "dark");
    if (Theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    if (Theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [Theme, themeChange]);

  const navbarClick = () => {
    document.body.classList.toggle("res-nav-active");

    const navopen = document.querySelector("#navopen");
    const navclose = document.querySelector("#navclose");

    navopen?.classList.toggle("none");
    navclose?.classList.toggle("none");
  };

  return (
    <div>
      <Navbar
        nightLightMode={nightLightMode}
        Theme={Theme}
        navbarClick={navbarClick}
      />
      <Mobilenav 
        nightLightMode={nightLightMode}
        Theme={Theme}
        navbarClick={navbarClick}
      />
      <main style={{ padding: "20px" }}>
        <h1>Blog</h1>
        <section style={{ display: "grid", gap: "20px" }}>
          {posts.map((post) => (
            <article key={post.id} style={{
              padding: "20px", borderRadius: "8px", backgroundColor: "#f0f0f0", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
              <h2>{post.title}</h2>
              <p><i>{post.date}</i></p>
              <p>{post.content.slice(0, 100)}...</p>
              <Link to={`/blog/${post.id}`} style={{ color: "blue", textDecoration: "underline" }}>Read more</Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
