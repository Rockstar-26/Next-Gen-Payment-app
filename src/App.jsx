import React from 'react';
import styles from './style';
import {Navbar,Billing,CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero} from "./components"

const App = () => (
  <div className="bg-gray-900 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
       <Navbar/>
      </div>
    </div>

    <div className={`bg-gray-900 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-gray-900 ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/> 
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
      </div>
    </div>
  </div>
);

export default App;
