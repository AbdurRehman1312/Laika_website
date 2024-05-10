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
    const isBridgeRoute = location.pathname === '/bridge';
    const isFaucetRoute = location.pathname === '/faucets';

    // Combine bridge and faucet route checks
    const isSpecialRoute = isBridgeRoute || isFaucetRoute;

    return (
        <>
            <div className="w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* Navbar */}
                        <Navbar />
                    </div>
                </div>
                {/* Apply conditional styling based on the route */}
                <div className={`${isSpecialRoute ? 'px-0' : styles.paddingX} ${isSpecialRoute ? 'justify-start' : styles.flexStart}`}>
                    <div className={`${styles.bridgebox}`}>
                        {/* Hero component without padding */}
                        {isHomeRoute && <Hero styles={styles.hero} />}

                        {/* Outlet - where Bridge and Faucet components will be rendered */}
                        <Outlet />
                    </div>
                </div>
                {/* Applying styles.boxWidth to the Footer */}
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
