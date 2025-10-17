"use client";
import { API_NODE_URL } from "@/configs/config";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BlogsList = ({ data }) => {
  const { slug } = useParams(); // 👈 get slug from the route
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const type = slug[1]
    const content = slug[2]
    if (slug || slug.length == 1) {
      fetchFilteredBlogs(type,content);
    }else{
      fetchFilteredBlogs();

    }
  }, [slug]);

  const fetchFilteredBlogs = async (type,content) => {
    try {
      setLoading(true);
      // Example filters (can be extended)
      const filters = {
        type: "BlogDetails",
      };
      if (type==="category") {
        filters.category=content
      }else if (type==="tag") {
        filters.tag=content
      }else{
      }
      console.log(filters);
      
      const query = new URLSearchParams(filters).toString();

      const res = await fetch(`${API_NODE_URL}blog?${query}`);
      const result = await res.json();

      if (result.status) {
        setBlogs(result.data);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <p className="text-center text-gray-600 mt-4">Loading...</p>;

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Filtered Blogs for: {slug}
      </h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {blog.name || "Untitled Blog"}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Type:</strong> {blog.type || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Slug:</strong> {blog.slug || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Path:</strong> {blog.path || "N/A"}
              </p>

              {blog.categorys?.length > 0 && (
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Categories:</strong>{" "}
                  {blog.categorys.map((c) => c.name).join(", ")}
                </p>
              )}

              {blog.tags?.length > 0 && (
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Tags:</strong>{" "}
                  {blog.tags.map((t) => t.name).join(", ")}
                </p>
              )}

              <a
                href={`${blog.path}`}
                className="text-blue-600 text-sm font-medium hover:underline mt-3 inline-block"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsList;
