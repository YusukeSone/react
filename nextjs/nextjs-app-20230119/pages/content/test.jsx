import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// posts はビルド時に getStaticProps() によって生成されます。
function test() {
  return (
    <ul>
      <Link
        href="/content/blog"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Blog <span>-&gt;</span>
        </h2>
        <p>
          to Blog.
        </p>
      </Link>
      <Link
        href="/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Top <span>-&gt;</span>
        </h2>
        <p>
          to Top.
        </p>
      </Link>
    </ul>
  )
}


export default test