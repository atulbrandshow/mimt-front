// components/MetaTags.js
import Head from 'next/head';
import { useRouter } from 'next/router';

const MetaTags = ({ data, isHomePage = false }) => {
  const router = useRouter();
  
  // Default meta data
  const defaultMeta = {
    title: "MBA, B.Tech., BBA, BCA | Best College in Delhi NCR | Mangalmay, Greater Noida,",
    description: "MIMT, Greater Noida is one of the best colleges in Delhi NCR for MBA, B.Tech., BBA, BCA and other business and engineering courses. Top ranked college. Mangalmay Greater Noida,",
    keywords: "MBA, B.Tech., BBA, BCA, Best College in Delhi NCR, Greater Noida, Delhi NCR, Top Colleges, Business Schools, Engineering College, UP, B.Com, B.A, B.Ed., Mangalmay, Top PGDM Colleges in UPTU, Best Management Colleges in India, UPSEE Best PGDM colleges, Top GBTU Institutes, Top Management institute",
    image: "https://www.gims.net.in/img/gims-logo.png"
  };

  // Use provided data or defaults
  const metaTitle = data?.metatitle || data?.title || defaultMeta.title;
  const metaDescription = data?.metadesc || data?.description || defaultMeta.description;
  const metaKeywords = data?.keywords_tag || defaultMeta.keywords;
  const metaImage = data?.banner_img || defaultMeta.image;
  const pageUrl = `https://www.gims.net.in${router.asPath}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="gims" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default MetaTags;