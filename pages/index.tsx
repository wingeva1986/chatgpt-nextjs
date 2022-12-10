import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChatGpt Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Quick <a href="https://nextjs.org">Chatgpt </a>
        </h1>

        <p className={styles.description}>
          分享最新的Chatgpt技术, 并提供体验的方式与快捷入口
        </p>


        <div className={styles.grid}>
          <Link href="/chatgpt" className={styles.card}>
            <h2>聊天室 &rarr;</h2>
            <p>点击开始和AI聊天.</p>
          </Link>

          <a href="https://github.com/moyuanhua/chatgpt-nextjs" className={styles.card}>
            <h2>Git 地址 &rarr;</h2>
            <p>一个Nextjs实现的与ChatGpt聊天的项目</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
