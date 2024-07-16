import { memo } from "react"
import  chefs from  "../assets/images/chefs.jpg"
import  marioAndadrian from  "../assets/images/mario-and-adrian.jpg"
import  b_MarioAndAdrian from  "../assets/images/big_mario_and_adrian.jpg"
import  tables from  "../assets/images/tables.jpg"

import styles from "../styles/aboutpage.module.css";

const AboutPage = () => {
  return (
    <main className={`${styles.main} container-fluid`}>
    <div className={styles.about_title}>
        <h1>About Us</h1>
         <img src={chefs} alt="chefs" />
    </div>


    <div className={`${styles.history} row` }>
        <div className="col-md-12 col-lg-7 col-xl-7 col-xxl-7">
          <div className={styles.history_content}>
             <h2 className={styles.history_heading}>Since 2012</h2>
             <p className={styles.history_first_para}>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. After conducting extensive food research and gaining immersive knowledge of kitchen ethics, Little Lemon opened its doors on May 1st, 2012.</p>
             <p className={styles.history_second_para}>To curate the menu, Mario draws inspiration from family recipes and his experience as a chef in Italy. Meanwhile, Adrian handles all marketing efforts for the restaurant and spearheaded the expansion of the menu beyond classic Italian, incorporating additional cuisines from the Mediterranean region.</p>
          </div>

        </div>
        <div className="col-md-12 col-lg-5 col-xl-5 col-xxl-5">
         
          <div className={styles.history_images}>
            <figure className={styles.history_img_one}>
              <img src={marioAndadrian} alt="younger mario and adrian" />
            </figure>
           <figure className={styles.history_img_two}>
            <img src={b_MarioAndAdrian} alt="older mario and adrian" />
           </figure>
           
          </div>

        </div>
    </div>

    <div className={`${styles.venue} row`}>
        <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6  order-sm-2 order-2 order-lg-1">
            <img src={tables}alt="venue" className={styles.venue_img} />
        </div>

        <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6  order-sm-1 order-1 order-lg-2">
          <div className={styles.venue_content}>
            <h2 className={styles.venue_heading}>The Restaurant</h2>
            <p className={styles.venue_para_one}>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12 to 15 items that they rotate seasonally. 
             The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
           </p>
           <p className={styles.venue_para_two}>
             Elevate your private events at Little Lemon, where Mediterranean charm meets exquisite cuisine. Our intimate venue is perfect for hosting memorable gatherings, whether it's an anniversary celebration, corporate dinner, or special family occasion. 
             With a delectable Mediterranean menu, a cozy ambiance, and attentive service, we ensure your event is a culinary journey your guests won't forget. Come savor the magic of the Mediterranean with us, making every private event a cherished experience.
           </p>
          </div>
        </div>
    </div>

 </main>
  )
}

export default memo(AboutPage)