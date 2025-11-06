"use client";
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // ✅ Import Next.js hook for URL handling
import { AnimatedTooltip } from "@/component/ui/animated-tooltip";
import Header from "@/component/Header";


const FeaturedBlogShimmer = () => (
  <div className="grid md:grid-cols-2 bg-white shadow-md border border-gray-200 rounded-2xl overflow-hidden">
    <div className="w-full h-72 bg-gray-300 animate-pulse"></div>
    <div className="p-6 flex flex-col justify-center animate-pulse">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="h-5 w-24 bg-gray-300 rounded-full"></div>
        <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
      </div>
      <div className="h-8 w-4/5 bg-gray-300 rounded-md mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  </div>
);

const BlogCardShimmer = () => (
  <div className="bg-white shadow-md rounded-2xl border border-gray-200 overflow-hidden">
    <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
    <div className="p-5 animate-pulse">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <div className="h-4 w-20 bg-gray-300 rounded-full"></div>
      </div>
      <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="space-y-2 mb-3">
        <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  </div>
);

const BlogsList = ({ data }) => {
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

  const pathname = usePathname(); // ✅ Get current URL path

  // ✅ Extract category slug from the URL if the user is on /category/[slug]
  useEffect(() => {
    const pathParts = pathname.split("/");
    if (pathParts.includes("category")) {
      const slugIndex = pathParts.indexOf("category");
      const slugFromUrl = pathParts[slugIndex + 1] || "";
      if (slugFromUrl && slugFromUrl !== selectedCategory) {
        setSelectedCategory(slugFromUrl);
        fetchBlogs(1, search, slugFromUrl);
      }
    } else if (selectedCategory) {
      // Clear selected category if URL changes back to /blogs
      setSelectedCategory("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
        const sorted = result.data.pages.sort(
          (a, b) => new Date(b.post_date_gmt) - new Date(a.post_date_gmt)
        );
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
    const newCategory = slug === selectedCategory ? "" : slug;
    setSelectedCategory(newCategory);

    // ✅ Update URL dynamically without full reload
    if (newCategory) {
      window.history.pushState({}, "", `/category/${newCategory}`);
    } else {
      window.history.pushState({}, "", `/blogs`);
    }

    fetchBlogs(1, search, newCategory);
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
    <div className="bg-white">
      {/* Navbar */}
      <Header data={data} BreadCrumb={data?.breadCrumb} />
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <nav className="bg-primary rounded-r-[50px] py-6 px-6 sticky top-0 z-20">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-4 px-5">
          <h1 className="text-white text-2xl font-novaBold">Our Blog</h1>
          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center flex-1">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`text-base font-novaSemi px-3 py-1 rounded-md transition ${selectedCategory === cat.slug
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
              className="bg-secondary text-black px-4 py-2 text-sm font-novaSemi transition"
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-primary">
        <div className="bg-white rounded-l-3xl py-10">
          <div className="max-w-[1400px] mx-auto space-y-14 px-5">
            {/* Featured Article */}
            <>
              <section>
                <h2 className="text-3xl font-novaBold text-gray-800 mb-6">Latest Blogs</h2>
                {loading && blogs.length === 0 ? (
                  <FeaturedBlogShimmer />
                ) : (
                  featuredBlog && (
                    <div className="grid md:grid-cols-2 bg-white shadow-md drop-shadow-xl border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
                      <img
                        src={featuredBlog?.banner_img || "/placeholder.jpg"}
                        alt={featuredBlog.name}
                        className="w-full h-72 object-cover"
                      />
                      <div className="p-6 flex flex-col justify-center">
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                          {featuredBlog.categorys.length > 0 &&
                            featuredBlog.categorys.map((category, idx) => {
                              const categoryColors = [
                                { bg: "bg-gradient-to-r from-blue-100 to-blue-50", text: "text-blue-700", border: "border-blue-200" },
                                { bg: "bg-gradient-to-r from-purple-100 to-purple-50", text: "text-purple-700", border: "border-purple-200" },
                                { bg: "bg-gradient-to-r from-emerald-100 to-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
                                { bg: "bg-gradient-to-r from-amber-100 to-amber-50", text: "text-amber-700", border: "border-amber-200" },
                                { bg: "bg-gradient-to-r from-rose-100 to-rose-50", text: "text-rose-700", border: "border-rose-200" },
                              ];
                              const colorClass = categoryColors[idx % categoryColors.length];
                              return (
                                <a
                                  key={category.term_id}
                                  href={`blogs/category/${category.slug}`}
                                  className={`inline-block px-4 py-1 ${colorClass.bg} ${colorClass.text} text-xs font-novaBold uppercase tracking-widest rounded-full border ${colorClass.border} hover:shadow-md transition-all duration-200`}
                                >
                                  {category.name}
                                </a>
                              );
                            })}
                        </div>
                        <h3 className="text-2xl font-novaSemi text-gray-900 mb-3">{featuredBlog.name}</h3>
                        <p
                          className="text-gray-600 text-sm mb-4 font-novaReg line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: featuredBlog.description || "No description available.",
                          }}
                        />
                        <div className="flex items-center justify-between">
                          <p className="text-gray-500 text-sm flex font-novaSemi items-center gap-1">
                            📅 <span>{formatDate(featuredBlog?.post_date_gmt)}</span>
                          </p>
                          <a
                            href={featuredBlog.path}
                            className="text-blue-600 text-sm font-novaSemi hover:underline"
                          >
                            Read more →
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </section>
            </>

            {/* More Blogs */}
            <section>
              <h2 className="text-2xl font-novaBold text-gray-800 mb-6">More Blogs</h2>

              {loading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Render 6 shimmer cards. Adjust count as needed. */}
                  {[...Array(6)].map((_, i) => (
                    <BlogCardShimmer key={i} />
                  ))}
                </div>
              ) : otherBlogs.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherBlogs.map((blog) => (
                    <div
                      key={blog._id}
                      className="bg-white shadow-md rounded-2xl drop-shadow-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative">
                        <img
                          src={blog?.banner_img || "/placeholder.jpg"}
                          alt={blog?.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="flex flex-wrap items-center gap-3 px-5 mt-2">
                          {blog.categorys.length > 0 &&
                            blog.categorys.map((category, idx) => {
                              const categoryColors = [
                                { bg: "bg-gradient-to-r from-blue-100 to-blue-50", text: "text-blue-700", border: "border-blue-200" },
                                { bg: "bg-gradient-to-r from-purple-100 to-purple-50", text: "text-purple-700", border: "border-purple-200" },
                                { bg: "bg-gradient-to-r from-emerald-100 to-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
                                { bg: "bg-gradient-to-r from-amber-100 to-amber-50", text: "text-amber-700", border: "border-amber-200" },
                                { bg: "bg-gradient-to-r from-rose-100 to-rose-50", text: "text-rose-700", border: "border-rose-200" },
                              ];
                              const colorClass = categoryColors[idx % categoryColors.length];
                              return (
                                <a
                                  key={category.term_id}
                                  href={`/blogs/category/${category.slug}`}
                                  className={`inline-block px-2 py-1 ${colorClass.bg} ${colorClass.text} text-xs font-novaSemi uppercase tracking-widest rounded-full border ${colorClass.border} hover:shadow-md transition-all duration-200`}
                                >
                                  {category.name}
                                </a>
                              );
                            })}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-novaSemi text-gray-900 mb-2 line-clamp-2">
                          {blog.name}
                        </h3>
                        <p
                          className="text-gray-600 text-sm mb-3 line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: blog.description || "No description available.",
                          }}
                        />
                        <div className="flex items-center justify-between">
                          <p className="text-orange-500 text-sm">
                            📅 {formatDate(blog?.post_date_gmt)}
                          </p>
                          <a
                            href={blog.path}
                            className="text-blue-600 text-sm font-novaSemi hover:underline"
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
          </div>
        </div>
        {!loading && blogs.length > 0 && (
          <div className="bg-white">
            <div className="bg-primary flex justify-center items-center rounded-r-[50px] py-4 px-6 space-x-4">
              <button
                disabled={pagination.currentPage === 1}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                className={`px-4 py-2 rounded-lg border text-sm font-novaSemi uppercase ${pagination.currentPage === 1
                  ? "bg-white text-black cursor-not-allowed"
                  : "bg-white text-black"
                  }`}
              >
                ← Prev
              </button>
              <span className="text-gray-100 font-novaReg text-sm">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              <button
                disabled={pagination.currentPage === pagination.totalPages}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                className={`px-4 py-2 rounded-lg text-sm font-novaSemi uppercase ${pagination.currentPage === pagination.totalPages
                  ? "bg-secondary text-black cursor-not-allowed"
                  : "bg-secondary text-black"
                  }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsList;
