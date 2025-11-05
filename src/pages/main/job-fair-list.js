"use client";
import Header from "@/component/Header";
import { API_NODE_URL } from "@/configs/config";
import React, { useEffect, useState } from "react";

// --- New Skeleton Component ---
/**
 * A skeleton card component to show while jobs are loading.
 * Uses Tailwind's animate-pulse for a shimmer effect.
 */
const JobCardSkeleton = () => (
  <div className="bg-white rounded-[50px] border border-gray-200 shadow-md overflow-hidden animate-pulse">
    {/* Image Placeholder */}
    <div className="w-full h-44 bg-gray-200"></div>

    <div className="p-6">
      {/* Meta Placeholder */}
      <div className="flex justify-between items-center mb-3">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
      </div>

      {/* Title Placeholder */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>

      {/* Description Placeholder */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Button Placeholder */}
      <div className="h-10 bg-gray-200 rounded-3xl mt-6"></div>
    </div>
  </div>
);

// --- Main Component ---
const JobPostedList = ({ data }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 8,
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
      setJobs([]); // Ensure jobs is an empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    fetchJobs(newPage);
  };

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <div className="bg-primary">
        <div className="bg-white h-16 rounded-bl-3xl" />
      </div>
      <section className="w-[93vw] bg-primary rounded-r-[100px] py-16 min-h-[60vh]">
        <div className="max-w-[1400px] mx-auto px-4"> {/* Added px-4 for mobile padding */}
          <h1 className="text-4xl font-novaBold text-white mb-2">
            Latest Job Openings
          </h1>
          <p className="text-gray-300 font-novaReg text-base mb-10">
            Explore the most recent job postings and find your next career
            opportunity.
          </p>

          {/* --- Grid Container --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Loading State: Show Skeletons */}
            {loading &&
              Array.from({ length: pagination.limit }).map((_, index) => (
                <JobCardSkeleton key={index} />
              ))}

            {/* Job List: Show Job Cards */}
            {!loading &&
              jobs.length > 0 &&
              jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white rounded-[50px] border border-gray-200 shadow-md drop-shadow-xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  {/* Company Logo */}
                  {job.banner_img ? (
                    <img
                      src={`https://www.mangalmay.org/upload/companylogo/${job.banner_img}`}
                      alt={job.name}
                      className="w-full h-44 object-contain bg-gray-50 p-6 border-b border-gray-100"
                    />
                  ) : (
                    <div className="w-full h-44 bg-gray-50 flex items-center justify-center text-gray-400 border-b border-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 11.25h6.75M9 15.75h6.75M9 20.25h6.75" />
                      </svg>
                    </div>
                  )}

                  {/* Job Content - flex-grow pushes button to bottom */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      {/* Meta Info */}
                      <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 mb-2">
                        <span className="font-novaReg">
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
                          <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-novaReg text-xs">
                            {job.categorys.map((c) => c.name).join(", ")}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-novaSemi text-gray-900 mb-2 line-clamp-2 min-h-[3.75rem]">
                        {job.name || "Untitled Job"}
                      </h3>

                      {/* Description */}
                      <div
                        className="text-gray-700 text-sm mb-4 font-novaReg line-clamp-3 min-h-[3.75rem]"
                        dangerouslySetInnerHTML={{
                          __html: job.description || "No description available.",
                        }}
                      />
                    </div>

                    {/* Action Button */}
                    <a
                      href={job.path}
                      className="block text-center bg-secondary text-black py-2.5 rounded-3xl font-novaSemi transition-colors duration-200 mt-4"
                    >
                      View Details <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* Empty State */}
          {!loading && jobs.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white/10 rounded-2xl">
              <h3 className="text-2xl font-novaSemi text-white">
                No Jobs Found
              </h3>
              <p className="text-gray-300 mt-2">
                There are currently no job postings available. Please check back
                later.
              </p>
            </div>
          )}

          {/* Pagination */}
          {!loading && jobs.length > 0 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                disabled={pagination.currentPage === 1}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                className={`px-5 py-2 rounded-lg text-sm font-novaReg border transition ${pagination.currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                ← Prev
              </button>

              <span className="text-white font-novaSemi text-sm">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>

              <button
                disabled={pagination.currentPage === pagination.totalPages}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                className={`px-5 py-2 rounded-lg text-sm font-novaReg border transition ${pagination.currentPage === pagination.totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-secondary text-black hover:bg-opacity-90"
                  }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobPostedList;