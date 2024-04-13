import styles from "./style";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Opportunities from "./components/Opportunities";
import Features from "./components/Features"
import Token from "./components/Token";
// import {
//   Navbar,
//   Hero,
//   Stats,
//   Bussiness,
//   Billing,
//   CardDeal,
//   Testimonials,
//   Client,
//   Cta,
//   Footer,
// } from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero section  */}
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Opportunities />
        <Features />
        <Token />
        {/* <CardDeal />
        <Testimonials />
        <Client />
        <Cta />
        <Footer />  */}
      </div>
    </div>
  </div>
);

export default App;
