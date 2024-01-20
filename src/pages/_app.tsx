import { PlayerProvider } from '@/store/PlayerContext'
import { AnimationProvider } from '@/store/AnimationContext'
import '@/styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {


    const getLayout = Component.getLayout || ((page) => page)
 
    return <AnimationProvider>
            <PlayerProvider>
                {
                    getLayout(<Component {...pageProps} />)
                }
            </PlayerProvider>
        </AnimationProvider>
    
}
