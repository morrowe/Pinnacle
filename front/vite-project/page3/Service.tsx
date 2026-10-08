import styles from  './Service.module.scss';
import {im} from  '../src/assets/img.ts';

function App() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
            <div>
                <h1>Bringing Your Vision to Life</h1>
                <p>Pinnacle's commitment to excellence extends beyond just constructing buildings - it's about crafting exceptional spaces that inspire and delight. </p>
            </div>
            <div className={styles.bg}></div>
        </section>
        <section className={styles.sect2}>
            <div>
                <h4>Residential Construction</h4>
                <button>Schedule a Calll</button>
            </div>
            <div>
                <p>Pinnacle has a long history of delivering exceptional residential construction services, from custom homes to community developments to renovations. Our team of experts works closely with our clients to understand their unique needs and preferences, ensuring that every project we undertake is a reflection of their personal style and vision.</p>
                <div>
                    <h6></h6>
                    <p></p>
                    <div></div>
                </div>
            </div>
        </section>
        <section className={styles.sect3}>
            <div>
                <img src={im.icon7} alt="" />
                <h4>Have a project in your mind? </h4>
            </div>
            <div>
                <div>
                    <div>
                        <input type="checkbox" />
                        <p>I agree with Terms of Use and Privacy Policy</p>
                    </div>
                    <button>Send <img src={im.subtract} alt="" /></button>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default App
