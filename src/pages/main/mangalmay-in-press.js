"use client";
import { API_NODE_URL } from "@/configs/config";
import React, { useEffect, useState } from "react";

const NewsList = () => {
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
                type: "News",
                page,
                limit: pagination.limit,
            };

            if (category) filters.category = category;
            if (querySearch) filters.search = querySearch;

            const query = new URLSearchParams(filters).toString();
            const res = await fetch(`${API_NODE_URL}blog?${query}`);
            const result = await res.json();
            console.log(result);

            if (result.status) {
                setBlogs(result.data.pages);
                setPagination(result.data.pagination);
            } else {
                setBlogs([]);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
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
        <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-8 mt-14">
            {/* Blog Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center gap-4">
                    {/* Logo / Title */}
                    <h1 className="text-2xl font-bold text-indigo-700">
                        📰 Our <span className="text-yellow-500">News</span>
                    </h1>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search news..."
                            className="px-4 py-2 text-sm text-gray-700 focus:outline-none w-40 sm:w-64"
                        />
                        <button
                            onClick={() => fetchBlogs(1)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium transition"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap gap-2 justify-center border-t border-gray-100 bg-gradient-to-r from-indigo-50 to-white">
                    {categories.length > 0 ? (
                        categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => handleCategoryClick(cat.slug)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.slug
                                    ? "bg-indigo-600 text-white shadow-sm"
                                    : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">No categories available</p>
                    )}
                </div>
            </nav>

            {/* Blog Section */}
            <div className="max-w-7xl mx-auto mt-32">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-10">
                    {selectedCategory
                        ? `Showing News for "${selectedCategory}"`
                        : search
                            ? `Search Results for "${search}"`
                            : "Latest News & Updates"}
                </h2>

                {loading && (
                    <p className="text-center text-gray-500">Loading news...</p>
                )}

                {!loading && blogs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => {
                            // --- Sanitize description ---
                            let desc = blog.description || "No description available.";

                            // Remove all <img> tags
                            desc = desc.replace(/<img[^>]*>/gi, "");

                            // Strip all other HTML tags
                            desc = desc.replace(/<\/?[^>]+(>|$)/g, "");

                            // Trim whitespace
                            desc = desc.trim();

                            return (
                                <div
                                    key={blog._id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                                >
                                    {/* Blog Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        {blog?.banner_img ? (
                                            <img
                                                src={`https://www.mangalmay.org/news/${blog?.banner_img}`}
                                                alt={blog.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    </div>

                                    {/* Blog Details */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
                                            {blog.name || "Untitled Blog"}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                            {desc || "No description available."}
                                        </p>

                                        {blog.categorys?.length > 0 && (
                                            <div className="text-xs text-gray-500 mb-3">
                                                <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">
                                                    {blog.categorys.map((c) => c.name).join(", ")}
                                                </span>
                                            </div>
                                        )}

                                        <a
                                            href={blog.path}
                                            className="inline-block text-indigo-600 font-medium hover:underline text-sm"
                                        >
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                ) : (
                    !loading && (
                        <p className="text-center text-gray-500 mt-10">No News Found.</p>
                    )
                )}

                {/* Pagination */}
                {!loading && blogs.length > 0 && (
                    <div className="flex justify-center items-center mt-12 space-x-2">
                        <button
                            disabled={pagination.currentPage === 1}
                            onClick={() => handlePageChange(pagination.currentPage - 1)}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium ${pagination.currentPage === 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            ← Prev
                        </button>

                        {[...Array(pagination.totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded-md text-sm font-medium ${pagination.currentPage === i + 1
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            disabled={pagination.currentPage === pagination.totalPages}
                            onClick={() => handlePageChange(pagination.currentPage + 1)}
                            className={`px-4 py-2 rounded-lg border text-sm font-medium ${pagination.currentPage === pagination.totalPages
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
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

export default NewsList;
