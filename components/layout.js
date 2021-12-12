import Head from 'next/head'
import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>UTHUPIA</title>
                <meta name="description" content="UTHUPIAS official website" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@500&display=swap" rel="stylesheet"></link>
            </Head>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}