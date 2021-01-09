import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <Head>
        <title>NEXT TODOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center">
          <h4 className="text-orange text-bold text-6xl text-center">THIS IS TODOS FROM JSONPLACEHOLDER BY NEXT.JS</h4>
        </div>
        <div className="flex justify-center mt-6">
          <Link className="" href="/todos">
            GO TO TODOS
          </Link>
        </div>
      </main>
    </div>
  )
}
