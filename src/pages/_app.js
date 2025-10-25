'use client';

import '../styles/globals.css';
import Footer from '@/component/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDataProvider } from '@/context/AppDataContext';
import LatestNavbar from '@/component/LatestNavbar';

function MyApp({ Component, pageProps }) {
    const [isShowNavAndFooter, setIsShowNavAndFooter] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const hiddenPrefixes = ['/admin']; // only prefix, no *

        const shouldHide = hiddenPrefixes.some(prefix =>
            router.pathname === prefix || router.pathname?.startsWith(prefix + '/')
        );

        setIsShowNavAndFooter(!shouldHide);
    }, [router.pathname]);

    return (
        <AppDataProvider>
            {isShowNavAndFooter && <LatestNavbar />}
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {isShowNavAndFooter && <Footer />}
        </AppDataProvider>
    );
}

export default MyApp;
