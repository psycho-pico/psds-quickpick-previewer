import type {Metadata} from 'next'
import {Nunito_Sans} from 'next/font/google'
import '@/src/styles/globals.scss'
import {ThemeProvider} from "@/src/components/theme-provider";

const nunito = Nunito_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: `%s - ${process.env.NEXT_PUBLIC_APP_TITLE}`,
        default: process.env.NEXT_PUBLIC_APP_TITLE
    },
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    icons: {
        icon: 'icons/psds.png',
        shortcut: 'icons/psds.png',
        apple: 'icons/psds.png',
        other: {
            rel: 'icons',
            url: 'icons/psds.png',
        }
    },
    applicationName: process.env.NEXT_PUBLIC_APP_TITLE,
    referrer: 'origin-when-cross-origin',
    keywords: ['Quick Pick', 'React', 'Next.js'],
    authors: [{name: 'psycho-pico', url: 'https://github.com/psycho-pico'}],
    colorScheme: 'dark',
    creator: 'Yohanes Pajero',
    publisher: 'Yohanes Pajero',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={nunito.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
