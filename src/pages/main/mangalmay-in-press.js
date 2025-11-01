"use client";
import { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter } from "next/router";

export default function DailyNewsPage() {
  const router = useRouter();
  const [topNews, setTopNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(1);
  const perPage = 6;

  const heroPlaceholder = "image/about/news_img2.webp";
  const cardPlaceholder = "image/about/News_img.jpeg";

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const res = await fetch(`${API_NODE_URL}blog?type=News&page=1&limit=200`);
      const result = await res.json();

      if (result.status) {
        const pages = result.data.pages;

        // ✅ Hero = only first news
        setTopNews(pages.slice(0, 1));

        // ✅ ALL remaining news = second section
        setAllNews(pages.slice(1));
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  // ✅ Pagination logic
  const totalPages = Math.ceil(allNews.length / perPage);
  const paginatedNews = allNews.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="mt-14 w-full bg-white">
      {loading ? (
        <p className="text-center py-20 text-gray-500">Loading...</p>
      ) : (
        <>
          {/* ✅ HERO SECTION (Only ONE News) */}
          <section
            className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
            style={{
              backgroundImage: `url(${topNews[0]?.image || heroPlaceholder})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7 text-white">
                <span className="px-4 py-1 bg-[#fdd023] text-sm font-semibold rounded-md">
                  BREAKING
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                  {topNews[0]?.name}
                </h1>

                <p className="text-lg opacity-90 mt-4 max-w-xl">
                  {topNews[0]?.shortDescription}
                </p>
              </div>

              {/* ✅ Right side Latest Updates (Top 4 from all news) */}
              <div className="md:col-span-5 text-white mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase mb-6 flex items-center gap-2">
                  ⚡ Latest Updates
                </h3>

                <div className="space-y-8">
                  {allNews.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      onClick={() => router.push(item?.path)}
                      className="flex gap-4 p-3 rounded-lg cursor-pointer hover:bg-white/10"
                    >
                      <img
                        src={item.image || cardPlaceholder}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-medium mb-1">{item.name}</p>
                        <span className="text-xs opacity-75">
                          {new Date(item.createdAt).toDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ✅ SECOND SECTION — ALL REMAINING NEWS */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 border-l-8 border-[#fdd023] pl-4">
              Latest News
            </h2>

            {/* ✅ News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedNews.map((item) => (
                <div
                  onClick={() => router.push(item?.path)}
                  key={item._id}
                  className="relative group h-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={item.image || cardPlaceholder}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  <span className="absolute top-4 left-4 px-4 py-1 text-xs font-semibold bg-white text-black rounded-full shadow">
                    {item.categorys?.[0]?.name || "News"}
                  </span>

                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#fdd023] transition">
                      {item.name}
                    </h3>
                    <p className="text-sm opacity-90 line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  page === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-[#fdd023]"
                }`}
              >
                ← Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    page === i + 1
                      ? "bg-[#fdd023] text-white border-[#fdd023]"
                      : "bg-white border-gray-300 hover:bg-[#fdd023] hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  page === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-[#fdd023]"
                }`}
              >
                Next →
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
