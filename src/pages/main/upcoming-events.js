"use client";
import { API_NODE_URL } from "@/configs/config";
import React, { useEffect, useState } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 9,
  });

  useEffect(() => {
    fetchEvents(1);
  }, []);

  const fetchEvents = async (page = 1) => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        type: "Event", // ✅ Fetch events instead of blogs
        page,
        limit: pagination.limit,
      }).toString();

      const res = await fetch(`${API_NODE_URL}blog?${query}`);
      const result = await res.json();

      if (result.status) {
        setEvents(result.data.pages);
        setPagination(result.data.pagination);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    fetchEvents(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 mt-14">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Upcoming Events
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our upcoming events, workshops, and seminars.
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading events...</p>
        )}

        {!loading && events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image */}
                {item.banner_img ? (
                  <img
                    src={"https://www.mangalmay.org/upcoming-events/"+item.banner_img}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {item.name || "Untitled Event"}
                  </h3>

                  <div
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: item.description || "No description available.",
                    }}
                  />

                  <a
                    href={item.path}
                    className="inline-block text-blue-600 font-medium text-sm hover:underline"
                  >
                    View Event Details →
                  </a>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
                  <span>
                    {item.date
                      ? new Date(item.date).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Unknown Date"}
                  </span>
                  {item.categorys?.length > 0 && (
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                      {item.categorys.map((c) => c.name).join(", ")}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500 text-lg">
              No events found.
            </p>
          )
        )}

        {/* Pagination */}
        {!loading && events.length > 0 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              disabled={pagination.currentPage === 1}
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition ${
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
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition ${
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

export default EventList;
