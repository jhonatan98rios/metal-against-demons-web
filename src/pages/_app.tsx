import { PlayerProvider } from '@/store/PlayerContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}
