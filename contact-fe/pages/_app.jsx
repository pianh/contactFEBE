import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/globals.scss';
import 'animate.css';

import RootLayout from '@/components/layout/RootLayout';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import EmptyLayout from '@/components/layout/EmptyLayout';

export default function App({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);
    const Layout = Component.Layout ?? EmptyLayout;
    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    );
}
