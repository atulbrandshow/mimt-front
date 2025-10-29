"use client";
import { API_NODE_URL } from "@/configs/config";
import React, { useEffect, useState } from "react";

const JobPostedList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 9,
  });

  useEffect(() => {
    fetchJobs(1);
  }, []);

  // Fetch Job Posts
  const fetchJobs = async (page = 1) => {
    try {
      setLoading(true);

      const query = new URLSearchParams({
        type: "JobPosted",
        page,
        limit: pagination.limit,
      }).toString();

      const res = await fetch(`${API_NODE_URL}blog?${query}`);
      const result = await res.json();

      if (result.status) {
        setJobs(result.data.pages);
        setPagination(result.data.pagination);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    fetchJobs(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 mt-14">
      {/* Page Header */}
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Latest Job Openings
        </h1>
        <p className="text-gray-600 text-lg">
          Explore the most recent job postings and find your next career opportunity.
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading jobs...</p>
        )}

        {/* Job List */}
        {!loading && jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Company Logo */}
                {job.banner_img ? (
                  <img
                    src={`https://www.mangalmay.org/upload/companylogo/${job.banner_img}`}
                    alt={job.name}
                    className="w-full h-44 object-contain bg-gray-100 p-6"
                  />
                ) : (
                  <div className="w-full h-44 bg-gray-100 flex items-center justify-center text-gray-400">
                    No Logo
                  </div>
                )}

                {/* Job Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {job.name || "Untitled Job"}
                  </h3>

                  <div
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: job.description || "No description available.",
                    }}
                  />

                  {/* Meta Info */}
                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 mb-4">
                    <span>
                      Posted:{" "}
                      {job.date
                        ? new Date(job.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "Unknown"}
                    </span>
                    {job.categorys?.length > 0 && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                        {job.categorys.map((c) => c.name).join(", ")}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <a
                    href={job.path}
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-500 text-lg">
              No job postings available.
            </p>
          )
        )}

        {/* Pagination */}
        {!loading && jobs.length > 0 && (
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

export default JobPostedList;
