import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>
      <p className={styles.header_text_1}>Hello! </p>
      <p className={styles.header_text_2}>I'm Chloe Heng</p>
      <p className={styles.header_text_3}>Nice to meet you!</p>
      <div className= {styles.button_container}>
      <a className= {styles.cv} href = "https://www.linkedin.com/in/chloe-heng-27554a1b7/" > linkedin</a>
      <a className= {styles.contact} href = "https://t.me/chloeehengg/" > Contact</a>
      </div>
      <div className= {styles.photo_container}>
        <img className = {styles.photo} src= "/icons/PhotoTrial(500X500).jpg" alt= "" ></img>
      </div>
      <p className = {styles.about_me} > Hi I like to eat and sleep
      </p>
      <p className= {styles.footer} > Created by me
      </p>
    </body>
  )
}
