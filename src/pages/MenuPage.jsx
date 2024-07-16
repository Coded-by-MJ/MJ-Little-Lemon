import { memo } from 'react'
import styles from '../styles/menupage.module.css'

import bruschetta from "../assets/images/Bruschetta.jpg"
import carpaccio from "../assets/images/carpaccio.jpg"
import fristo from "../assets/images/fristo.jpg"
import hummus from "../assets/images/rich-hummus.jpg"
import osso from "../assets/images/Osso.jpg"
import falafel from "../assets/images/Falafell.jpg"
import bass from "../assets/images/bass.jpg"
import caponata from "../assets/images/Caponata.jpg"
import salad from "../assets/images/salad.jpg"
import potato from "../assets/images/potato.jpg"
import verdure from "../assets/images/verdure.jpg"
import pasta from '../assets/images/puttanesca.jpg'



const MenuPage = () => {
  return (

     <main className={`container-fluid ${styles.menu_main}`}>
        <div className={styles.menu_title}>
               <h1>Our Special Menu</h1>
               <p>Tradition and innovation unite in every bite, showcasing our unwavering commitment to quality. At Little Lemon, we invite you to relish the irresistible allure of Mediterranean cuisine, where freshness, authenticity, and a deep love for food combine to craft an unforgettable dining adventure.
                 Join us and let your taste buds embark on a sun-soaked Mediterranean culinary voyage like no other.</p>
          </div>


          <div className={styles.menu_table}>
                  <div className={styles.menu_column}>
                  <h2>Starters</h2>
                         <div className={styles.single_menu}>
                                <img src={bruschetta} alt="Bruschetta" />
                                <div className={styles.food_content}>
                                        <h3>Bruschetta al Pomodoro <span>$9.99</span></h3>
                                        <p>Grilled bread rubbed with garlic, topped with diced tomatoes, fresh basil, and olive oil.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={carpaccio} alt="Carpaccio"  />
                                <div className={styles.food_content}>
                                        <h3>Carpaccio di Manzo <span>$9.99</span></h3>
                                        <p>Thinly sliced raw beef tenderloin served with arugula, Parmesan shavings, and a drizzle of olive oil.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={fristo} alt="Fritto"  />
                                <div className={styles.food_content}>
                                        <h3>Fritto Misto di Mare <span>$9.99</span></h3>
                                        <p>Mixed seafood (shrimp, calamari, and small fish) lightly battered and fried, served with aioli.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={hummus} alt="hummus"/>
                                <div className={styles.food_content}>
                                        <h3>Rich Hummus <span>$9.99</span></h3>
                                        <p>Creamy chickpea dip blended with tahini, lemon juice, garlic, and olive oil, served with pita bread.</p>
                                </div>
                         </div>
                  </div>
                  <div className={styles.menu_column}>
                        <h2>Main Courses</h2>
                         <div className={styles.single_menu}>
                                <img src={osso} alt="Osso" />
                                <div className={styles.food_content}>
                                        <h3>Osso Buco <span>$9.99</span></h3>
                                        <p>Braised veal shanks cooked in a savory broth with tomatoes, white wine, and aromatics.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={pasta} alt="Puttanesca"/>
                                <div className={styles.food_content}>
                                        <h3>Pasta Puttanesca <span>$9.99</span></h3>
                                        <p>Spaghetti with a flavorful sauce made from tomatoes, olives, capers, garlic, and anchovies.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={falafel} alt="Falafel" />
                                <div className={styles.food_content}>
                                        <h3>Falafel <span>$9.99</span></h3>
                                        <p>Deep-fried chickpea or fava bean patties, served with tahini sauce and salad.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={bass} alt="Bass"  />
                                <div className={styles.food_content}>
                                        <h3>Grilled Sea Bass <span>$9.99</span></h3>
                                        <p> Whole sea bass marinated and grilled to perfection, served with lemon and fresh herbs.</p>
                                </div>
                         </div>
                  </div>
                  <div className={styles.menu_column}>
                        <h2>Sides</h2>
                         <div className={styles.single_menu}>
                                <img src={caponata} alt="Caponata"  />
                                <div className={styles.food_content}>
                                        <h3>Caponata <span>$9.99</span></h3>
                                        <p>Sicilian eggplant dish with tomatoes, olives, capers, and celery, cooked in a sweet and sour sauce.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={salad} alt="Rucola" />
                                <div className={styles.food_content}>
                                        <h3>Rucola e Parmigiano<span>$9.99</span></h3>
                                        <p>Arugula salad with cherry tomatoes, shaved Parmesan, and a balsamic vinaigrette.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={potato} alt="Patate"   />
                                <div className={styles.food_content}>
                                        <h3>Patate al Forno <span>$9.99</span></h3>
                                        <p>Roasted potatoes with rosemary, garlic, and a sprinkle of sea salt.</p>
                                </div>
                         </div>
                         <div className={styles.single_menu}>
                                <img src={verdure} alt="Verdure" />
                                <div className={styles.food_content}>
                                        <h3>Verdure Grigliate <span>$9.99</span></h3>
                                        <p>Grilled mixed vegetables (zucchini, bell peppers, eggplant) drizzled with olive oil.</p>
                                </div>
                         </div>

         </div>
        </div>
  

    </main>

  )
}

export default memo(MenuPage)