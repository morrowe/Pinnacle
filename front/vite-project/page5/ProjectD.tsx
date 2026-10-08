import NavLink from  react-router-dom;
import {im} from  '../src/assets/img.ts';
import styles from  './ProjectD.module.scss'

function ProjectD() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
          <div>
            <button>Back to all Projects</button>
            <div>
              <h1>The Grand Estate</h1>
              <p>The Grand Estate is a stunning residential development featuring 12 custom-built homes, each with its own unique design and high-end amenities. Nestled in a picturesque setting, this community offers residents a truly luxurious living experience.</p>
            </div>
            <div>
              <button>Residential Development</button>
              <button><img src={im.location} alt="" /> 123 Luxury Lane</button>
            </div>
            <div></div>
          </div>
        </section>
        <section className={styles.sect2}>
          <div className={styles.left}>
            <div>
              <h5>Planning and Development</h5>
              <p>The planning and development of the Grand Estate began several years ago, with a team of experts working tirelessly to bring this vision to life. From the initial concept to the final construction, every detail was carefully considered to ensure that the Grand Estate would be a truly exceptional community.</p>
              <div></div>
            </div>
            <div>
              <h5>Design and Architecture</h5>
              <p>The Grand Estate's design and architecture were inspired by the finest luxury estates around the world. Each home was designed to be a masterpiece of modern design, with clean lines, sleek surfaces, and an emphasis on natural light and ventilation.</p>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <h5>Amenities</h5>
              <p>The Grand Estate offers a range of luxurious amenities, including:</p>
              <div>
                <p>Private movie theater: A state-of-the-art movie theater with plush seating and a large screen.</p>
                <p>Indoor swimming pool: A sparkling indoor pool with a retractable roof, perfect for year-round swimming.</p>
                <p>Fitness center: A fully equipped fitness center with the latest exercise equipment and personal training services.</p>
                <p>Private parking: Secure, underground parking for each home, with direct access to the elevator.</p>
                <p>Gated community: A secure, gated community with 24/7 security and access control.</p>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <h5>Community</h5>
              <p>The Grand Estate is more than just a collection of homes - it's a community. Residents can enjoy a range of community amenities, including:</p>
              <div>
                <p>Community center: A state-of-the-art community center with a fully equipped kitchen, perfect for hosting events and gatherings.</p>
                <p>Parks and green spaces: Lush parks and green spaces throughout the community, providing a peaceful retreat from the hustle and bustle of city life.</p>
                <p>Walking trails: Walking trails that wind through the community, providing a scenic and peaceful way to enjoy the outdoors.</p>
              </div>
              <div></div>
            </div>
            <div>
              <h5>Conclusion</h5>
              <p>The Grand Estate is a truly exceptional community, offering residents a luxurious living experience like no other. With its stunning design, luxurious amenities, and private outdoor spaces, this community is the perfect choice for those who demand the very best.</p>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <h2>Amenities</h2>
              <div>
                <p>Private movie theater</p>
                <p>Indoor swimming pool</p>
                <p>Fitness center</p>
                <p>Private parking</p>
                <p>Gated community</p>
              </div>
            </div>
            <div>
              <h2>Share</h2>
              <NavLink to=""><img src={im.share1} alt="" /></NavLink>
              <NavLink to=""><img src={im.share2} alt="" /></NavLink>
              <NavLink to=""><img src={im.share3} alt="" /></NavLink>
              <NavLink to=""><img src={im.share4} alt="" /></NavLink>
              <NavLink to=""><img src={im.share5} alt="" /></NavLink>
            </div>
            <div>
              <h2>5min Read</h2>
            </div>
            <div>
              <h2>Have a project in your mind? </h2>
              <button>Schedule a free call</button>
            </div>
          </div>
        </section>
        <section className={styles.sect3}>
          <div>
            <div>
              <div>
                <img src={im.icon1} alt="" />
                <h4>You may also like</h4>
              </div>
              <p>You may also want to check the following projects we worked on.</p>
            </div>
            <button>Back to all Projects</button>
          </div>
          <div>
            <div>
              <div></div>
              <p></p>
              <p></p>
              <div>
                <img src={im.locat} alt="" />
                <p></p>
              </div>
              <button></button>
              <button>View Property</button>
            </div>
          </div>
        </section>
        <section className={styles.sect4}>
        </section>
        <section className={styles.sect5}>
        </section>
      </main>
    </>
  )
}

export default ProjectD