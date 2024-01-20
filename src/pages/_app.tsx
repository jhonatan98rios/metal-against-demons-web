import { PlayerProvider } from '@/store/PlayerContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {


    const getLayout = Component.getLayout || ((page) => page)
 
    return getLayout(
        <PlayerProvider>
            <Component {...pageProps} />
        </PlayerProvider>
    )
}
