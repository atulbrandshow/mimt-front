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
    stripHtmlTags(data?.description || "").substring(0, 150) + "...";

  const categories = data?.category
    ? Array.isArray(data.category)
      ? data.category
      : [data.category]
    : [];

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      {/* ✅ Premium Hero Section */}
      <section className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
        <img
          src={bannerImage}
          alt={data?.title || "News Banner"}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Center Title */}
        <div className="absolute bottom-10 w-full text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight drop-shadow-lg">
            {data?.title}
          </h1>
        </div>
      </section>

      {/* ✅ Floating Info Card */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
        <div className="rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-gray-200 p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-xs font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm font-medium">
            📅 Published on{" "}
            <span className="font-semibold text-gray-900">{formattedDate}</span>
          </p>

          <p className="mt-4 text-gray-700 text-[17px] leading-relaxed italic">
            {excerpt}
          </p>
        </div>
      </div>

      {/* ✅ Main Article Layout */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <article className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 md:p-12">

          {/* Section Divider */}
          <div className="w-full h-[2px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 my-6"></div>

          {/* ✅ Article Content */}
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

        {/* ✅ Footer Spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default NewsDetails;
