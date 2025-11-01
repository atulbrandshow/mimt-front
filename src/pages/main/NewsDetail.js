"use client";

const NewsDetails = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <p className="text-gray-500 text-lg">Loading news...</p>
      </div>
    );
  }

  const fallbackImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80";

  const bannerImage = data?.banner_img || fallbackImage;

  const formattedDate = data?.created_at
    ? new Date(data.created_at).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const excerpt =
    stripHtmlTags(data?.description || "").substring(0, 160) + "...";

  const categories = data?.category
    ? Array.isArray(data.category)
      ? data.category
      : [data.category]
    : [];

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10">
      
      {/* ✅ Header Section (Image Left + Title Right) */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl border bg-white">
          <img
            src={bannerImage}
            onError={(e) => (e.target.src = fallbackImage)}
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Title & Meta */}
        <div className="flex flex-col justify-center">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-3">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-xs bg-[#fdd023]/20 text-[#b58a00] border border-[#fdd023]/40 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            {data?.title}
          </h1>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            {excerpt}
          </p>

          <p className="mt-4 text-sm text-gray-500 font-medium">
            📅 {formattedDate}
          </p>
        </div>
      </section>

      {/* ✅ ARTICLE CONTENT */}
      <section className="max-w-5xl mx-auto px-6 mt-10">
        <article className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 md:p-12">

          {/* Elegant Divider */}
          <div className="w-full h-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 mb-8" />

          {/* ✅ Actual News Description */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-8
              prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:my-8
              prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600"
            dangerouslySetInnerHTML={{
              __html: data?.description || "<p>No content available</p>",
            }}
          />
        </article>
      </section>

      <div className="h-16" />
    </div>
  );
};

export default NewsDetails;
