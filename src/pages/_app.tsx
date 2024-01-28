import { PlayerProvider } from '@/store/PlayerContext'
import { AnimationProvider } from '@/store/AnimationContext'
import '@/styles/globals.css'
import React from 'react'
import { UpgradeTreeProvider } from '@/store/UpgradeTreeContext'

export default function App({ Component, pageProps }) {


    const getLayout = Component.getLayout || ((page) => page)

    return (
        <AnimationProvider>
            <PlayerProvider>
                <UpgradeTreeProvider>
                    {
                        getLayout(<Component {...pageProps} />)
                    }
                </UpgradeTreeProvider>
            </PlayerProvider>
        </AnimationProvider>
    )
}
