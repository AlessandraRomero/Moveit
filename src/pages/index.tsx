import { CompletedChallenges } from '../compontents/CompletedChallenges'
import { Countdown } from '../compontents/Countdown'
import { ExperienceBar } from '../compontents/ExperienceBar'
import { Profile } from '../compontents/Profile'
import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../compontents/ChallengeBox'

import Head from 'next/head'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
           <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}
