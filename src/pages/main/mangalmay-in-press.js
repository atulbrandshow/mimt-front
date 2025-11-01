"use client";
import { useEffect, useState } from "react";
import { API_NODE_URL } from "@/configs/config";

export default function DailyNewsPage() {
  const [topNews, setTopNews] = useState([]);
  const [editor, setEditor] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const allNews = [...editor, ...videos];



  // Pagination for editor section
  const [page, setPage] = useState(1);
  const perPage = 6;

  // Placeholder images
  const heroPlaceholder = "image/about/news_img2.webp";
  const cardPlaceholder = "image/about/News_img.jpeg";

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const res = await fetch(`${API_NODE_URL}blog?type=News&page=1&limit=50`);
      const result = await res.json();
      if (result.status) {
        setTopNews(result.data.pages.slice(0, 3));
        setEditor(result.data.pages.slice(3, 40));
        setVideos(result.data.pages.slice(40, 50));
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const totalPages = Math.ceil(editor.length / perPage);
  const paginatedEditor = editor.slice((page - 1) * perPage, page * perPage);
  const paginatedAllNews = allNews.slice((page - 1) * perPage, page * perPage);


  return (
    <div className="mt-14 w-full bg-white">
      {loading ? (
        <p className="text-center py-20 text-gray-500">Loading...</p>
      ) : (
        <>
          {/* HERO SECTION */}
          <section
            className="relative w-full h-[90vh] bg-cover bg-center flex items-center transition duration-1000 ease-out transform hover:scale-105"
            style={{
              backgroundImage: `url(${topNews[0]?.image || heroPlaceholder})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7 text-white animate-fadeInLeft">
                <span className="px-4 py-1 bg-[#fdd023] text-sm font-semibold rounded-md">
                  BREAKING
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight drop-shadow-lg">
                  {topNews[0]?.name}
                </h1>
                <p className="text-lg opacity-90 mt-4 max-w-xl">
                  {topNews[0]?.shortDescription}
                </p>
                <div className="mt-12">
                  <h3 className="text-sm uppercase font-semibold opacity-90 flex items-center gap-2">
                    <span>🔥</span> Trending Now
                  </h3>
                  <div className="grid grid-cols-3 gap-6 mt-4">
                    {topNews.map((item, i) => (
                      <div key={i} className="group cursor-pointer animate-fadeInUp delay-100">
                        <img
                          src={item.image || cardPlaceholder}
                          className="h-28 w-full object-cover rounded-lg group-hover:scale-110 transition duration-500"
                        />
                        <p className="text-sm mt-2 group-hover:text-yellow-300 transition">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 text-white mt-12 md:mt-0 animate-fadeInRight">
                <h3 className="text-sm font-semibold uppercase mb-6 flex items-center gap-2">
                  ⚡ Latest Updates
                </h3>
                <div className="space-y-8">
                  {topNews.map((item, i) => (
                    <div key={i} className="flex gap-4 hover:bg-white/10 p-3 rounded-lg transition cursor-pointer animate-fadeInUp delay-200">
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


          {/* MERGED NEWS SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 border-l-8 border-[#fdd023] pl-4">
              Latest News
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedAllNews.map((item) => (
                <div
                  key={item._id}
                  className="relative group h-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={item.image || cardPlaceholder}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-4 py-1 text-xs font-semibold bg-white text-black rounded-full shadow">
                    {item.categorys?.[0]?.name || "News"}
                  </span>

                  {/* Content */}
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

            {/* PAGINATION */}
            <div className="flex justify-center gap-2 mt-12">
              {/* Prev */}
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-[#fdd023]"
                  }`}
              >
                ← Prev
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-semibold
          border transition-all duration-300
          ${page === i + 1
                      ? "bg-[#fdd023] text-white border-[#fdd023]"
                      : "bg-white border-gray-300 hover:bg-[#fdd023] hover:text-white"
                    }
        `}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${page === totalPages
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
