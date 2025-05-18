'use client';

import { personalData } from "@/utils/data/personal-data";
import { useEffect, useState } from 'react';
// استيراد جميع المكونات الفرعية
import HeroSection from "./hero-section";
import AboutSection from "./about";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Education from "./education";
import Blog from "./blog";
import ContactSection from "./contact";

export default function HomeContent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}`
        );
        const data = await res.json();
        setBlogs(data.filter(item => item?.cover_image).sort(() => Math.random() - 0.5));
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };
    
    fetchBlogs();
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}