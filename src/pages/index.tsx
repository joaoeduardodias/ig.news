
import Head from 'next/head'
import styes from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styes.contentContainer} >
        <section className={styes.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span>word.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>

    </>
  )
}
