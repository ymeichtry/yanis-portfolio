import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar";
import Mobilenav from "../components/navbar/Mobilenav";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

const BlogDetailPage: React.FC = () => {
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

  useEffect(() => {
    const examplePosts = [
      { id: 1, title: "First Blog Post", content: "Full content of the first post.", date: "2023-10-01" },
      { id: 2, title: "Second Blog Post", content: "Full content of the second post.", date: "2023-11-01" },
    ];
    const foundPost = examplePosts.find((p) => p.id === parseInt(id || "", 10));
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return <div>Post not found.</div>;
  }

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
        <h1>{post.title}</h1>
        <p><i>{post.date}</i></p>
        <p>{post.content}</p>
      </main>
    </div>
  );
};

export default BlogDetailPage;
