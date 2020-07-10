import Meta from '../components/Meta'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
    return <>
        <Meta />
        <Header />
        <Component {...pageProps} />
    </>
}