import styles from  './Privacy.module.scss'

function Privacy() {

  return (
    <>
      <main>
        <section className={styles.sect1}>
          <h1>Privacy Policy</h1>
          <p>Last updated: June 23, 2024</p>
        </section>
        <section className={styles.sect2}>
          <div>
            <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the [Privacy Policy Generator](https://www.termsfeed.com/privacy-policy-generator/).</p>
          </div>
          <h4>Collecting and Using Your Personal Data</h4>
          <h5>Retention of Your Personal Data</h5>
          <div>
            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
            <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
          </div>
          <h5>Transfer of Your Personal Data</h5>
          <div>
            <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
          <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
          <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Privacy
