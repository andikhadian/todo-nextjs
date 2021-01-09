import Head from 'next/head'
import Link from 'next/link'
function Todo({ data }) {
    return (
        <>
            <Head>
    <title>Skillearn | {data.title}</title>
            </Head>
            
            <main className="container mt-12 px-10">
                <h1 className="text-6xl mb-8">{data.title}</h1>
                <Link href="/todos">Back to todos</Link>
            </main>
        </>
    )
}

Todo.getInitialProps = async (props) => {
    const { id } = props.query
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => json)
        return { data }
    } catch (error) {
        console.log(error)
    }
}

export default Todo
