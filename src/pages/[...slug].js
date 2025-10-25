import { useEffect, useState, Suspense, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import ShimmerContent from "@/component/ShimmerContent";
import HomePage from "./pagesComp/HomePage";
import { API_NODE_URL } from "@/configs/config";

/* -----------------------------
   📦 Fetcher function for SWR
----------------------------- */
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

/* ------------------------------------------
   🧩 Dynamically load a page component
------------------------------------------ */
const loadComponent = async (componentName) => {
  try {
    const mod = await import(`./main/${componentName}`);
    return mod?.default || null;
  } catch (error) {
    console.warn(`⚠️ Component not found: ${componentName}. Using fallback.`);
    try {
      const fallbackMod = await import(`./main/DefaultPageComponent`);
      return fallbackMod?.default || null;
    } catch (fallbackError) {
      console.error("Error loading fallback component:", fallbackError);
      return null;
    }
  }
};

/* ------------------------------------------
   🧱 Wrapper for consistent layout
------------------------------------------ */
const DynamicPageWrapper = ({ children }) => (
  <main className="flex-grow bg-orange-50">
    {children || <HomePage />}
  </main>
);

/* ------------------------------------------
   🧠 Main Component: DynamicPage
------------------------------------------ */
export default function DynamicPage({ fallbackData, pagePath }) {
  const router = useRouter();
  const [Component, setComponent] = useState(null);

  // ✅ SWR for incremental revalidation
  const { data, error, isLoading } = useSWR(
    `${API_NODE_URL}slug?path=${encodeURIComponent(pagePath)}`,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
      revalidateIfStale: true,
      shouldRetryOnError: false,
    }
  );

  /* ------------------------------------------
     ⚙️ Load the corresponding page component
  ------------------------------------------ */
  useEffect(() => {
    let isMounted = true;

    const initComponent = async () => {
      const componentName = data?.data?.ComponentType || "DefaultPageComponent";
      const DynamicComp = await loadComponent(componentName);
      if (isMounted) setComponent(() => DynamicComp);
    };

    if (data?.data) initComponent();
    return () => { isMounted = false; };
  }, [data?.data]);

  /* ------------------------------------------
     🧾 Dynamic SEO metadata (from API or fallback)
  ------------------------------------------ */
  const { meta_title, meta_description, banner, name } = data?.data || {};
  const metaTitle =
    meta_title || "Mangalmay, Greater Noida";
  const metaDescription =
    meta_description ||
    "MIMT, Greater Noida is one of the best colleges in Delhi NCR for MBA, B.Tech., BBA, BCA and other business and engineering courses. Top ranked college. Mangalmay Greater Noida";
  const bannerImage = banner || "https://www.akgec.ac.in/wp-content/uploads/2023/03/akgec-campus.jpg";
  const pageUrl = `https://www.akgec.ac.in${router.asPath}`;

  /* ------------------------------------------
     🚀 Loading & Error States
  ------------------------------------------ */
  if (isLoading) return <ShimmerContent />;
  if (error || !data?.status) return <div className="text-center py-20 text-red-600 font-semibold">404 - Page Not Found</div>;

  /* ------------------------------------------
     ✅ Render Dynamic Page
  ------------------------------------------ */
  return (
    <DynamicPageWrapper>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={bannerImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content={`${name || ""}, Mangalmay, Greater Noida`} />
      </Head>

      <Suspense fallback={<ShimmerContent />}>
        {Component ? <Component data={data.data} /> : <ShimmerContent />}
      </Suspense>
    </DynamicPageWrapper>
  );
}

/* ------------------------------------------
   ⚡ Server-Side Data Fetching (SEO + SSR)
------------------------------------------ */
export async function getServerSideProps(context) {
  const { slug = [] } = context.params || {};
  let path = "/" + slug.join("/");

  // Clean query parameters
  if (path.includes("?")) path = path.split("?")[0];

  // Ignore static and system files
  const ignoredPaths = [
    "/favicon.ico",
    "/sw.js",
    "/manifest.json",
    "/robots.txt",
    "/sitemap.xml",
  ];

  const isIgnored =
    ignoredPaths.includes(path) ||
    path.startsWith("/_next") ||
    path.startsWith("/static") ||
    path.startsWith("/api") ||
    path.match(/\.(js|css|map|json|svg|png|jpg|jpeg|ico)$/);

  if (isIgnored) {
    return { notFound: true };
  }

  try {
    const response = await fetch(
      `${API_NODE_URL}slug?path=${encodeURIComponent(path)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await response.json();

    if (!result?.status || !result?.data) {
      return { notFound: true };
    }

    return {
      props: {
        fallbackData: result,
        pagePath: path,
      },
    };
  } catch (error) {
    console.error("❌ Server API error:", error);
    return { notFound: true };
  }
}
