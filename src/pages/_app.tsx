import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import '../styles/globals.css'  // 전역 CSS 파일 import

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})

const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}