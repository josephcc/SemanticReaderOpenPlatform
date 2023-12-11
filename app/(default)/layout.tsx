'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import Head from 'next/head'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
    <Head>
        <meta name="google-site-verification" content="luA1PTxwG2ELOY4tBYHyo4AveqbkNZQhMckUC8-_-m8" />
    </Head>
      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}
