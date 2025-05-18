// app/blog/page.js
'use client'; // أضف هذا السطر في الأعلى

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";
import { useEffect, useState } from 'react';
import Link from 'next/link'; // أضف هذا الاستيراد

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data.filter(blog => blog?.cover_image));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs
          .sort(() => Math.random() - 0.5)
          .map((blog, i) => (
            <Link 
              href={`/blog/${blog.id}`} 
              key={blog.id}
              className="hover:scale-105 transition-all duration-300"
            >
              <BlogCard blog={blog} />
            </Link>
          ))}
      </div>
    </div>
  );
};