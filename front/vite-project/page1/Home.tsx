import styles from './Home.module.scss';
import {im} from  '../src/assets/img.ts';

function Home() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
          <div className={styles.left}>
            <h1>Creating a Better Tomorrow, One Home at a Time</h1>
            <p>We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
            <div>
              <button>Schedule a Call</button>
              <button>View Our Projucts</button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.review}>
              <img src={im.people1} alt="" />
              <div>
                <img src="" alt="" />
                <p>I highly recommend, My home exactly what I wanted</p>
                <p>Amanda | Actor</p>
              </div>
            </div>
            <img src="" alt="" />
            <div className={styles.review}>
              <img src={im.people2} alt="" />
              <div>
                <img src="" alt="" />
                <p>Pinnacle is my GO-TO when it comes to real estate</p>
                <p>James | CEO of Crazy Bank</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect2}>
          <div></div>
        </section>
        <section className={styles.sect3}>
          <div className={styles.head}>
            <div>
              <img src={im.icon1} alt="" />
              <h4>Featured Projects</h4>
            </div>
            <div>
              <p>we've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
              <button>View all Projects</button>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.bg}></div>
                <div>
                  <h3></h3>
                  <p></p>
                </div>
                <div>
                  <div>
                    <img src={im.locat} alt="" />
                    <p></p>
                  </div>
                  <button></button>
                </div>
                <button>View Property</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect4}>
          <div>
            <div>
              <h4>Quality service you get</h4>
              <img src={im.icon2} alt="" />
            </div>
            <p>At Pinnacle, we offer a wide range of services to cater to your unique needs. From residential construction to commercial development, we've got you covered.</p>
            <div>
              <button>Residential</button>
              <button>Property Management</button>
              <button>Commercial</button>
              <button>Development</button>
            </div>
          </div>
          <div className={styles.service}>
            <div>
              <div className={styles.bg}></div>
              <h3></h3>
              <p></p>
              <a href="">Learn more...</a>
            </div>
          </div>
        </section>
        <section className={styles.sect5}>
          <div>
            <div>
              <h4>What Our Clients Say</h4>
              <img src={im.icon3} alt="" />
            </div>
            <p>At Pinnacle, we're not just building structures - we're building relationships. Here's what some of our satisfied clients have to say about their experience with us.</p>
            <div></div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect6}>
          <div className={styles.head}>
            <div>
              <img src={im.icon4} alt="" />
              <h4>Latest News</h4>
            </div>
            <div>
              <p>We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
              <button>View all blog post</button>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.bg}></div>
                <div>
                  <h3></h3>
                  <p></p>
                </div>
                <div>
                  <div>
                    <img src={im.calendar} alt="" />
                    <p></p>
                  </div>
                  <button></button>
                </div>
                <button>View Property</button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect7}>
          <div>
            <img src={im.icon5} alt="" />
            <h4>Frequently Asked Questions</h4>
          </div>
          <div>
            <div className={styles.block}>
              <p></p>
              <p></p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
