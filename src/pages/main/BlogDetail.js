"use client"

import { useState, useEffect } from "react"

const BlogDetails = ({ data }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <p className="text-gray-500 text-lg">Loading blog...</p>
      </div>
    )
  }

  const bannerImage =
    data?.banner_img || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
  const formattedDate = data?.post_date_gmt
    ? new Date(data.post_date_gmt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : ""

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent || ""
  }

  const excerpt = data?.shortdesc ? stripHtmlTags(data?.shortdesc || "") : stripHtmlTags(data?.description || "").substring(0, 150) + "..."

  const tags = data?.tags || ["BBA", "Education", "Career", "Greater Noida"]

  const categories = data?.categorys ? (Array.isArray(data.categorys) ? data.categorys : [data.categorys]) : []

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Banner Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-900 mt-">
        <img
          src={bannerImage || "/placeholder.svg"}
          alt={data?.name || "Blog Banner"}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </section>
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-32 relative z-10">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 mb-3">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
              <nav className="flex items-center gap-2 text-sm">
                <a href="/" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Home
                </a>
                <span className="text-gray-400">/</span>
                <a href="/blogs" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Blogs
                </a>
                <span className="text-gray-400">/</span>
                <span className="text-gray-700 font-medium truncate">{data?.name?.substring(0, 50)}...</span>
              </nav>
            </div>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {categories.length > 0 ? (
              categories.map((category, idx) => {
                const categoryColors = [
                  { bg: "bg-gradient-to-r from-blue-100 to-blue-50", text: "text-blue-700", border: "border-blue-200" },
                  {
                    bg: "bg-gradient-to-r from-purple-100 to-purple-50",
                    text: "text-purple-700",
                    border: "border-purple-200",
                  },
                  {
                    bg: "bg-gradient-to-r from-emerald-100 to-emerald-50",
                    text: "text-emerald-700",
                    border: "border-emerald-200",
                  },
                  {
                    bg: "bg-gradient-to-r from-amber-100 to-amber-50",
                    text: "text-amber-700",
                    border: "border-amber-200",
                  },
                  { bg: "bg-gradient-to-r from-rose-100 to-rose-50", text: "text-rose-700", border: "border-rose-200" },
                ]
                const colorClass = categoryColors[idx % categoryColors.length]

                return (
                  <a
                    key={category.term_id}
                    href={`/blogs/category/${category.slug}`}
                    className={`inline-block px-4 py-2 ${colorClass.bg} ${colorClass.text} text-xs font-bold uppercase tracking-widest rounded-full border ${colorClass.border} hover:shadow-md transition-all duration-200`}
                  >
                    {category.name}
                  </a>
                )
              })
            ) : data?.category ? (
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-200">
                {data.category}
              </span>
            ) : null}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 text-pretty">
            {data?.name || "Untitled Blog Post"}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Published</p>
                <p className="text-base font-semibold text-gray-900">{formattedDate}</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-gray-300" />

            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed italic text-pretty">{excerpt}</p>
          </div>
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <a
                  key={idx}
                  href={``}
                  className="inline-block px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 text-sm font-medium rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200"
                >
                  #{tag?.name}
                </a>
              ))}
            </div>
          )}
        </div>



        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-16">
          <div
            className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-4
            prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-em:text-gray-800 prose-em:italic
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 
            prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:rounded-r-lg
            prose-blockquote:text-gray-700 prose-blockquote:italic
            prose-ul:list-disc prose-ul:ml-6 prose-ul:my-4
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-4
            prose-li:my-2 prose-li:text-gray-700 prose-li:leading-relaxed
            prose-li:marker:text-blue-500 prose-li:marker:font-bold
            prose-table:my-6 prose-table:w-full prose-table:border-collapse
            prose-th:bg-gray-100 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
            prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700
            prose-code:bg-gray-100 prose-code:text-red-600 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
            prose-pre:border prose-pre:border-gray-800
            prose-img:rounded-lg prose-img:shadow-md prose-img:my-6 prose-img:border prose-img:border-gray-200
            prose-hr:my-8 prose-hr:border-gray-300"
            dangerouslySetInnerHTML={{ __html: data?.description || "<p>No content available</p>" }}
          />
        </article>

        {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 mb-16 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Share This Article</h3>
              <p className="text-blue-100">Help others discover this insightful content</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg">
                Share
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200">
                Copy Link
              </button>
            </div>
          </div>
        </div> */}
        {/* 
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50" />
                <div className="p-4">
                  <p className="text-xs font-semibold text-blue-600 uppercase mb-2">Education</p>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                    Related Article Title Here
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    Brief description of the related article content...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default BlogDetails
