// Layout.js
import React from 'react';
import styles from './src/style';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Hero from './src/components/Hero'; // Import Hero component

function Layout() {
    const location = useLocation();

    // Check if the current route is the home route
    const isHomeRoute = location.pathname === '/';

    return (
        <>
            <div className="w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* Navbar */}
                        <Navbar />
                    </div>
                </div>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* Hero component without padding */}
                        {isHomeRoute && <Hero styles={styles.hero} />}

                        {/* Outlet */}
                        <Outlet />
                        
                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
