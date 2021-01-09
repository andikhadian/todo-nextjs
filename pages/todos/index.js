import Head from 'next/head'
import Link from 'next/link'
function Random({ data }) {
    return (
        <>
            <Head>
                <title>Todos</title>
            </Head>
            
            <main className="container mt-12 px-10">
                <h1 className="text-6xl mb-8">Todos</h1>
                <ul>
                {
                    data.map(todo => {
                        return <li key={todo.id} className="border border-indigo-700 p-4 flex">
                            <div>
                                {todo?.title ?? "-"} 
                            </div>
                            <Link href="/todos/[id]" as={`/todos/${todo.id}`} ><a href="" className=" ml-auto">Detail</a></Link></li>
                    })
                }
                </ul>
            </main>
        </>
    )
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)
        return { data }
    } catch (error) {
        console.log(error)
    }
}

export default Random
