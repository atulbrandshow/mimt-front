import { WEBSITE_URL } from '@/configs/config';
import Head from 'next/head'
import React from 'react'

const HomeMetaTags = ({ data }) => {
    const { metatitle, metadesc, keywords_tag, banner_img } = data || {};
    
    return (
        <Head>
            <title>{metatitle}</title>
            <meta name="description" content={metadesc} />
            <meta name="keywords" content={keywords_tag} />
            <meta name="country" content="India" />
            <meta name="Author" content="Mangalmay" />
            <meta name="abstract" content="Mangalmay Group Of Institutions" />
            <meta name="robots" content="index, follow" />
            <meta name="copyright" content="Mangalmay Institute, Greater Noida, Delhi NCR" />
            <meta name="revisit-after" content="1 day" />
            <link rel="canonical" href={WEBSITE_URL} />

            <meta property="og:image" content={banner_img} />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />

            <meta name="og:title" content={metatitle} />
            <meta name="og:description" content={metadesc} />
            <meta name="og:url" content={WEBSITE_URL} />

            <meta property="og:image" content={banner_img} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="628" />

            <meta name="title" property="og:title" content={metatitle} />
            <meta name="og:description" content={metadesc} />
            <meta name="og:url" content={WEBSITE_URL} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@mangalmaydotorg" />
            <meta name="twitter:site" content="@mangalmaydotorg" />
            <meta name="twitter:image" content={banner_img} />
            <meta name="twitter:title" content={metatitle} />
            <meta name="twitter:description" content={metadesc} />
            <meta name="twitter:url" content={WEBSITE_URL} />

            <meta property="og:image" content={banner_img} />
            <meta property="og:image:width" content="200" />
            <meta property="og:image:height" content="200" />
            <meta property="og:type" content="website" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mangalmay",
                        "alternateName": "Mangalmay Institute of Management and Technology",
                        "url": WEBSITE_URL,
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
                            "linkedin.com/in/mangalmaydotorg",
                            "https://www.youtube.com/mangalmayorg"
                        ]

                    })
                }}
            />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Mangalmay",
                        "url": WEBSITE_URL,
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.mangalmay.org/search.html?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })
                }}
            />

        </Head >
    )
}

export default HomeMetaTags