import React from 'react'
import styles from './src/style'
import { Outlet } from 'react-router-dom'
import Navbar from './src/components/Navbar'
import Footer from './src/components/Footer'
function Layout() {
    return (
        <>
            <div className="w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Outlet />
                        <Footer />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Layout