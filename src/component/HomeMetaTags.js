// components/HomeMetaTags.js
import Head from 'next/head';
import { WEBSITE_URL } from '@/configs/config';

const HomeMetaTags = ({ data }) => {
    const { metatitle, metadesc, keywords_tag, banner_img } = data || {};


    const title = metatitle || "MBA, B.Tech., BBA, BCA | Best College in Delhi NCR | Mangalmay, Greater Noida,";
    const description = metadesc || "MIMT, Greater Noida is one of the best colleges in Delhi NCR for MBA, B.Tech., BBA, BCA and other business and engineering courses. Top ranked college. Mangalmay Greater Noida,";
    const image = banner_img || "https://www.gims.net.in/img/gims-logo.png";
    const keywords = keywords_tag || "MBA, B.Tech., BBA, BCA, Best College in Delhi NCR, Greater Noida, Delhi NCR, Top Colleges, Business Schools, Engineering College, UP, B.Com, B.A, B.Ed., Mangalmay";

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="country" content="India" />
            <meta name="Author" content="MangalMay" />
            <meta name="abstract" content="Mangalmay Group Of Institutions" />
            <meta name="robots" content="index, follow" />
            <meta name="copyright" content="Mangalmay Institute, Greater Noida, Delhi NCR" />
            <meta name="revisit-after" content="1 day" />
            <link rel="canonical" href={WEBSITE_URL} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={WEBSITE_URL} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="mangalmay" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@mangalmaydotorg" />
            <meta name="twitter:site" content="@mangalmaydotorg" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mangalmay",
                        "alternateName": "Mangalmay Institute of Management and Technology",
                        "url": "https://www.mangalmay.org/",
                        "logo": "https://www.mangalmay.org/assets/images/best-college-logo.webp",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "",
                            "contactType": ""
                        },
                        "sameAs": [
                            "https://www.facebook.com/mangalmay.org",
                            "https://www.instagram.com/mangalmayinstitutions/",
                            "https://x.com/mangalmaydotorg",
                            "https://linkedin.com/in/mangalmaydotorg",
                            "https://www.youtube.com/mangalmayorg"
                        ]
                    })
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Mangalmay",
                        "url": "https://www.mangalmay.org/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.mangalmay.org/search.html?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })
                }}
            />
        </Head>
    );
};

export default HomeMetaTags;