import styles from './Project.module.scss';
import {im} from  '../src/assets/img.ts';

function Project() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
          <div></div>
          <div>
            <input type="text" />
            <button>Find a property</button>
          </div>
        </section>
        <section className={styles.sect2}>
          <div>
            <img src={im.icon1} alt="" />
            <h4>Our Exceptional Projects</h4>
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
          <button>See More</button>
        </section>
      </main>
    </>
  )
}

export default Project
