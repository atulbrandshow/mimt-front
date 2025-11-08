"use client"
import { useState, useEffect, useCallback } from "react"
import { API_NODE_URL, IMAGE_PATH } from "@/configs/config"
import Header from "@/component/Header"

export default function Page({ data }) {
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_NODE_URL}list-detail-page/all?page=${page}&limit=9&type=Circular`, {
        credentials: "include",
      })
      const data = await response.json()
      console.log("API Response:", data)

      if (data.status && data.data) {
        setEventsData(data.data)
        setTotalPages(data.pagination?.totalPages || 1)
      } else {
        setEventsData([
          {
            _id: "1",
            name: "Important Circular on Examination Schedule",
            date: "2024-06-15",
            shortdesc: "Please be informed about the updated examination schedule for the upcoming semester...",
            description: "<p>Please be informed about the updated examination schedule for the upcoming semester. The exams will commence from July 1st, 2024. Ensure to check the detailed timetable on the official website.</p>",
          },
          {
            _id: "2",
            name: "Notice Regarding Campus Maintenance",
            date: "2024-06-10",
            shortdesc: "Due to scheduled maintenance work, certain areas of the campus will be inaccessible...",
            description: "<p>Due to scheduled maintenance work, certain areas of the campus will be inaccessible from June 20th to June 25th, 2024. We apologize for any inconvenience caused and appreciate your understanding.</p>",
          }
        ])
        setTotalPages(1)
      }
    } catch (error) {
      console.error("Failed to fetch circulars:", error)
      setEventsData([])
      setTotalPages(1)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const stripHtml = (html) => {
    if (typeof window !== "undefined") {
      const tmp = document.createElement("DIV")
      tmp.innerHTML = html
      return tmp.textContent || tmp.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

  const truncateText = (text, maxLength = 150) => (text.length <= maxLength ? text : text.substr(0, maxLength) + "...")

  const handleCardClick = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path
    }
  }

  return (
    <section className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <div className="bg-primary rounded-r-[100px]">
        <div className="max-w-[1400px] mx-auto px-4 pt-8 pb-16">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-novaBold text-white">Circulars & Notices</h2>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <p className="text-gray-200 font-novaReg">
              Showing {eventsData.length} circular{eventsData.length !== 1 ? "s" : ""}
              {totalPages > 1 && ` (Page ${page} of ${totalPages})`}
            </p>
          </div>

          {/* Circulars List */}
          <div className="space-y-6">
            {eventsData.map((circular, index) => (
              <div
                key={circular._id}
                onClick={() => handleCardClick(circular.path)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-l-4 border-yellow-500 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Document Icon & Number */}
                  <div className="md:w-32 bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center p-6 text-white">
                    <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-novaBold">#{String((page - 1) * 9 + index + 1).padStart(3, "0")}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-secondary text-black px-2 py-0.5 rounded-full text-xs tracking-wide font-novaBold mr-3">
                            IMPORTANT
                          </span>
                          <span className="text-gray-500 font-novaSemi text-sm">{formatDate(circular.date)}</span>
                        </div>
                        <h3 className="text-xl font-novaBold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                          {circular.name}
                        </h3>
                        <div
                          className="text-gray-600 leading-snug font-novaReg line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: circular.shortdesc || truncateText(stripHtml(circular.description)),
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-primary font-novaSemi">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>View Document</span>
                      </div>
                      <div className="text-sm text-gray-500 font-novaReg">Official Notice</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={`px-4 py-2 rounded-lg font-novaSemi transition-all duration-300 ${page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg"
                  }`}
              >
                <svg className="w-5 h-5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (page <= 3) {
                    pageNum = i + 1
                  } else if (page >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = page - 2 + i
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg font-novaBold transition-all duration-300 ${page === pageNum
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg"
                        }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className={`px-4 py-2 rounded-lg font-novaSemi transition-all duration-300 ${page === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg"
                  }`}
              >
                Next
                <svg className="w-5 h-5 inline ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Page Info */}
          {totalPages > 1 && (
            <div className="text-center mt-6">
              <p className="text-gray-500 text-sm">
                Page {page} of {totalPages} • Total {eventsData.length} circulars
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}