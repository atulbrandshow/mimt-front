"use client";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
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
        const sorted = result.data.pages.sort((a, b) => new Date(b.post_date_gmt) - new Date(a.post_date_gmt));
        setBlogs(sorted);
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchBlogs(1, search, selectedCategory);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handleCategoryClick = (slug) => {
    setSelectedCategory(slug === selectedCategory ? "" : slug);
    fetchBlogs(1, search, slug === selectedCategory ? "" : slug);
  };

  const handlePageChange = (newPage) => {
    fetchBlogs(newPage);
  };

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const otherBlogs = blogs.slice(1);

  // ✅ Helper function for formatted date (dd-mm-yyyy)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 mt-20">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md py-4 px-6 mb-10 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-white text-2xl font-bold">Our Blog</h1>

          {/* Categories */}
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

          {/* Search */}
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

      <div className="max-w-7xl mx-auto space-y-14">
        {/* Featured Article */}
        {featuredBlog && (
          console.log(featuredBlog),
          
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h2>
            <div className="grid md:grid-cols-2 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img
                src={IMAGE_PATH+ featuredBlog?.banner_img || "/placeholder.jpg"}
                alt={featuredBlog.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 flex flex-col justify-center">
                <span className="text-sm bg-yellow-100 text-yellow-700 font-semibold px-3 py-1 rounded-full w-fit mb-3">
                  {featuredBlog.categorys?.[0]?.name || "General"}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {featuredBlog.name}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: featuredBlog.description || "No description available.",
                  }}
                />
                <div className="flex items-center justify-between">
                  {/* ✅ Show formatted date */}
                  <p className="text-orange-500 text-sm flex items-center gap-1">
                    📅 <span>{formatDate(featuredBlog?.post_date_gmt)}</span>
                  </p>
                  <a
                    href={featuredBlog.path}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* More Blogs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">More Blogs</h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : otherBlogs.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative">
                    <img
                      src={blog.image || "/placeholder.jpg"}
                      alt={blog.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {blog.categorys?.[0]?.name || "General"}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {blog.name}
                    </h3>
                    <p
                      className="text-gray-600 text-sm mb-3 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: blog.description || "No description available.",
                      }}
                    />
                    <div className="flex items-center justify-between">
                      {/* ✅ Show formatted date instead of "5 min" */}
                      <p className="text-orange-500 text-sm">📅 {formatDate(blog?.post_date_gmt)}</p>
                      <a
                        href={blog.path}
                        className="text-blue-600 text-sm font-semibold hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No more blogs found.</p>
          )}
        </section>

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
