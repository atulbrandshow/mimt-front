// pages/[...slug].js
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import DynamicPageWrapper from "./main/DynamicPage";
import ShimmerContent from "@component/ShimmerContent";
import MetaTags from "@/component/MetaTags";
import { API_NODE_URL } from "@/configs/config";

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
});

const loadComponent = async (componentName) => {
  try {
    const mod = await import(`./main/${componentName}`);
    return mod?.default || null;
  } catch (error) {
    console.warn(`Component ${componentName} not found, using fallback`);
    
    try {
      const fallbackMod = await import(`./main/DefaultPageComponent`);
      return fallbackMod?.default || null;
    } catch (fallbackError) {
      console.error("Fallback component also failed:", fallbackError);
      return null;
    }
  }
};

const isValidPath = (path) => {
  const ignoredPaths = [
    "/favicon.ico",
    "/sw.js",
    "/manifest.json",
    "/robots.txt",
    "/sitemap.xml",
  ];

  return !(
    ignoredPaths.includes(path) ||
    path?.startsWith("/_next") ||
    path?.startsWith("/static") ||
    path?.startsWith("/api") ||
    path.match(/\.(js|css|map|json|svg|png|jpg|jpeg|ico)$/)
  );
};

export default function DynamicPage({ fallbackData, pagePath }) {
  const router = useRouter();
  const [Component, setComponent] = useState(null);

  // SWR hook with fallbackData from SSR
  const { data, error, isLoading } = useSWR(
    `${API_NODE_URL}slug?path=${encodeURIComponent(pagePath)}`,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
      revalidateOnMount: !fallbackData, // Only revalidate if no fallback data
    }
  );

  // Dynamic import of component when data changes
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      console.log(data);
      
      const componentName = data?.data?.ComponentType || "DefaultPageComponent";
      const dynamicComponent = await loadComponent(componentName);
      
      if (isMounted) {
        setComponent(() => dynamicComponent);
      }
    };

    if (data?.status) {
      init();
    }

    return () => {
      isMounted = false;
    };
  }, [data]);

  // Loading state
  if (isLoading) {
    return (
      <DynamicPageWrapper>
        <ShimmerContent />
      </DynamicPageWrapper>
    );
  }

  // Error state
  if (error || !data?.status) {
    return (
      <DynamicPageWrapper>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
          <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
        </div>
      </DynamicPageWrapper>
    );
  }

  return (
    <DynamicPageWrapper>
      {/* Meta Tags */}
      <MetaTags data={data?.data} />
      
      {/* Dynamic Content */}
      <Suspense fallback={<ShimmerContent />}>
        {Component ? (
          <Component data={data.data} />
        ) : (
          <ShimmerContent />
        )}
      </Suspense>
    </DynamicPageWrapper>
  );
}

export async function getServerSideProps(context) {
  const { slug = [] } = context.params || {};
  let path = "/" + slug.join("/");

  // Clean path
  if (path.includes("?")) path = path.split("?")[0];

  // Validate path
  if (!isValidPath(path)) {
    return { notFound: true };
  }

  try {
    const response = await fetch(
      `${API_NODE_URL}slug?path=${encodeURIComponent(path)}`,
      {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server"
        },
        timeout: 5000, // 5 second timeout
      }
    );
    

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (!result.status || !result.data) {
      return { notFound: true };
    }

    return {
      props: {
        fallbackData: result,
        pagePath: path,
      },
    };
  } catch (error) {
    console.error("SSR API error:", error);
    
    // Return not found in case of error, or consider a fallback page
    return { notFound: true };
  }
}