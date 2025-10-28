"use client";
import { API_NODE_URL } from "@/configs/config";
import React, { useEffect, useState } from "react";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 9,
  });

  useEffect(() => {
    fetchCategories();
    fetchBlogs(1);
  }, []);

  // Fetch all blog categories
  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API_NODE_URL}blog/get-blog-category`);
      const result = await res.json();
      if (result.status && Array.isArray(result.data)) {
        setCategories(result.data);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching blog categories:", error);
    }
  };

  // Fetch blogs with filters
  const fetchBlogs = async (page = 1, querySearch = search, category = selectedCategory) => {
    try {
      setLoading(true);
      const filters = {
        type: "BlogDetails",
        page,
        limit: pagination.limit,
      };

      if (category) filters.category = category;
      if (querySearch) filters.search = querySearch;

      const query = new URLSearchParams(filters).toString();
      const res = await fetch(`${API_NODE_URL}blog?${query}`);
      const result = await res.json();
      
      if (result.status) {
        setBlogs(result.data.pages);
        setPagination(result.data.pagination);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search typing (live filter)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchBlogs(1, search, selectedCategory);
    }, 500); // debounce 500ms
    return () => clearTimeout(delayDebounce);
  }, [search]);

  // Handle category selection
  const handleCategoryClick = (slug) => {
    setSelectedCategory(slug === selectedCategory ? "" : slug);
    fetchBlogs(1, search, slug === selectedCategory ? "" : slug);
  };

  // Pagination
  const handlePageChange = (newPage) => {
    fetchBlogs(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 mt-14">
      {/* Blog Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md py-4 px-6 mb-10 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Left: Blog Title */}
          <h1 className="text-white text-2xl font-bold hover:text-yellow-300 transition">
            Our Blog
          </h1>

          {/* Middle: Categories */}
          <div className="flex flex-wrap gap-3 justify-center flex-1">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`text-sm font-medium px-3 py-1 rounded-md transition ${
                    selectedCategory === cat.slug
                      ? "bg-yellow-400 text-gray-800"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {cat.name}
                </button>
              ))
            ) : (
              <p className="text-gray-200 text-sm">No categories</p>
            )}
          </div>

          {/* Right: Search Bar */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs..."
              className="px-4 py-2 text-sm text-gray-700 focus:outline-none w-40 sm:w-56"
            />
            <button
              onClick={() => fetchBlogs(1)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 text-sm font-semibold transition"
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          {selectedCategory
            ? `Showing Blogs for "${selectedCategory}"`
            : search
            ? `Search Results for "${search}"`
            : "All Latest Blogs"}
        </h2>

        {loading && <p className="text-center text-gray-500">Loading blogs...</p>}

        {!loading && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-r from-indigo-200 to-blue-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.name || "Untitled Blog"}
                  </h3>
                  <div
                    className="text-gray-600 text-sm mb-3 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.description || "No description available.",
                    }}
                  />
                  <div className="text-xs text-gray-500 mb-3">
                    {blog.categorys?.length > 0 && (
                      <span className="inline-block bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md mr-2">
                        {blog.categorys.map((c) => c.name).join(", ")}
                      </span>
                    )}
                  </div>
                  <a
                    href={blog.path}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500">No blogs found.</p>
          )
        )}

        {/* Pagination */}
        {!loading && blogs.length > 0 && (
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              disabled={pagination.currentPage === 1}
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                pagination.currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              ← Prev
            </button>
            <span className="text-gray-700 text-sm">
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button
              disabled={pagination.currentPage === pagination.totalPages}
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                pagination.currentPage === pagination.totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsList;
