import Navbar from "./navbar"
import Head from "next/head"

function Container(props) {
  return (
    <div>
        <Head>
            <title>
                Next.js Project-Practice
            </title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css"/>
        </Head>
        <Navbar/>

        <div className="container p-4">
            {props.children}
        </div>
    </div>
  )
}

export default Container