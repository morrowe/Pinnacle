import styles from  './Blog.module.scss';
import {im} from  '../src/assets/img.ts';
import NavLink from  react-router-dom;

function Blog() {

  return (
    <>
      <main>
        <section className={styles.sect1}>

        </section>
        <section className={styles.sect2}>
          <div>
            <div>
              <img src={im.icon4} alt="" />
              <h4>Latest News</h4>
            </div>
            <div>
              <button>ALL</button>
              <button>Home Design</button>
              <button>Sustainability</button>
              <button>Renovation</button>
            </div>
          </div>
          <div>
            <div>
              <div></div>
              <button></button>
              <h2></h2>
              <div>
                <div>
                  <img src={im.calendar} alt="" />
                  <p></p>
                </div>
                <NavLink to="">Read more...</NavLink>
              </div>
            </div>
          </div>
          <button>Load More</button>
        </section>
      </main>
    </>
  )
}

export default Blog
