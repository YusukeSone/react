import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import useSWR, { SWRConfig } from 'swr'
const fetcher = url => fetch(url).then((res) => res.json());


// posts はビルド時に getStaticProps() によって生成されます。
function Blog() {

    const { data, error, isLoading } = useSWR('https://test20230107.g.kuroco.app/rcms-api/1/test', fetcher)


    if (error) return <ul>failed to load</ul>
    if (isLoading) return <ul>loading...</ul>
    
    // データをレンダリングする
  return (
    <ul>
      {data.list.map((post) => (
        <li key={post.topics_id}>
          <h1>{post.subject}</h1>
          <div>{post.ymd}</div>
          <div dangerouslySetInnerHTML={{ __html: post.contents + "<p>" + post.update_ymdhi + "</p>" }}></div>
        </li>
      ))}
      <Data2 />
      <Link
        href="/content/test"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Test <span>-&gt;</span>
        </h2>
        <p>
          to Test.
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

function Data2 () {
    const { data, error, isLoading } = useSWR('https://test20230107.g.kuroco.app/rcms-api/1/test02', fetcher)

    if (error) return <ul>failed to load</ul>
    if (isLoading) return <ul>loading...</ul>

    return (
      <div>
        {data.list.map((post) => (
          <li key={post.login_id}>
            <p>{post.name1}</p>
            <p>{post.name2}</p>
          </li>
        ))}
      </div>
    )
}

function App () {
  return (
    <SWRConfig
      value={{
        refreshInterval: 15000
      }}
    >
      <Blog />
    </SWRConfig>
  )
}

{/*
// posts はビルド時に getStaticProps() によって生成されます。
function Blog({ posts }) {

    console.log({posts})
    const { data, error, isLoading } = useSWR('', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    
    // データをレンダリングする
  return (
    <ul>
      {posts.list.map((post) => (
        <li key={post.topics_id}>
          <h1>{post.subject}</h1>
          <div>{post.ymd}</div>
        </li>
      ))}
      <Link
        href="/content/test"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Test <span>-&gt;</span>
        </h2>
        <p>
          to Test.
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

// この関数はサーバー側のビルド時に呼び出されます。
// クライアント側では呼び出されないので、
// 直接データベースクエリを実行できます。
export async function getStaticProps() {
  // posts を取得するために外部 API をコールします。
  // どんなデータ取得ライブラリでも使用できます。
  const res = await fetch('https://test20230107.g.kuroco.app/rcms-api/1/test')
  const posts = await res.json()

  // { props: { posts } } を返すことで、Blog コンポーネントはビルド時に
  // `posts` を prop として受け取ります。
  return {
    props: {
      posts,
    },
  }
}

*/}


export default App