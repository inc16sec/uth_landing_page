import Head from 'next/head'
import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Uthupia</title>
                <meta name="description" content="The official website of Uthupia." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@500&display=swap" rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}