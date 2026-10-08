import styles from'../page2/About.module.scss';
import {im} from  '../src/assets/img.ts';

function About() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
            <div className={styles.text}>
                <h1>We're building communities. </h1>
                <p>With a commitment to quality, innovation, and customer satisfaction, we've established ourselves as a trusted leader in the construction and real estate industry. We're passionate about building exceptional homes and communities that exceed our clients' expectations. </p>
            </div>
            <div className={styles.images}>
                <div className={styles.bg1}></div>
                <div className={styles.bg2}></div>
            </div>
        </section>
        <section className={styles.sect2}>
            <div>
                <h4>Our Story & Values</h4>
            </div>
            <div>
                <p>Pinnacle was founded in 2005 by John Doe, a seasoned entrepreneur with a vision to create a company that would revolutionize the way homes are built and lived in. As Pinnacle's founder and CEO, John Doe has led the company to new heights, driven by his unwavering commitment to excellence.</p>
                <div>
                    <img src={im.people7} alt="" />
                    <div>
                        <p>"At Pinnacle, we believe that every home we build should be a masterpiece - a reflection of our clients' dreams and aspirations. That's why we're dedicated to pushing the boundaries of what's possible in construction and real estate."</p>
                        <p>- John Doe, Founder and CEO</p>
                    </div>
                </div>
                <p>Since its inception, Pinnacle has grown to become a leading player in the industry, completing over 500 projects and serving thousands of satisfied clients. Today, the company employs a team of over 200 professionals, each with a unique set of skills and expertise.</p>
                <div>
                    <p>At Pinnacle, we're guided by a set of core values that shape our approach to every project we undertake. These values include:</p>
                    <p>Quality: We're committed to delivering exceptional quality in every aspect of our work, from design to construction to customer service.</p>
                    <p>Innovation: We're always looking for new and innovative ways to improve our processes, products, and services, ensuring that our clients receive the best possible experience.</p>
                    <p>Customer Satisfaction: We're dedicated to exceeding our clients' expectations, providing them with a personalized and tailored experience that meets their unique needs and preferences.</p>
                    <p>Sustainability: We're committed to building sustainable homes and communities that minimize our impact on the environment and promote a healthier, more sustainable future.</p>
                </div>
            </div>
        </section>
        <section className={styles.sect3}>
            <div>
                <div>
                    <h4>Our Achievements</h4>
                    <img src={im.icon3} alt="" />
                </div>
                <p>With the company now serving over 100 countries and available in 19 different languages. Our customer base is diverse and global, with a strong presence in Europe, Asia, and the Americas.</p>
            </div>
            <div>
                <div className={styles.top}>
                    <div>
                        <h6></h6>
                        <p></p>
                    </div>
                </div>
                <div className={styles.bott}>
                    <div>
                        <h6></h6>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.sect5}>
            <div>
                <div>
                    <img src={im.icon6} alt="" />
                    <h4>Our experienced team </h4>
                </div>
                <p>With a diverse range of skills and expertise, our team is dedicated to delivering exceptional results and exceeding our clients' expectations.</p>
            </div>
            <div>
                
            </div>
        </section>
        <section className={styles.sect6}>
        </section>
      </main>
    </>
  )
}

export default About
