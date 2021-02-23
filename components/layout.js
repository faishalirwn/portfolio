import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }) {
  const [nav, setNav] = useState(false)

  return (
    <div className="text-white text-opacity-95 font-sans px-6 mx-auto my-0 relative sm:max-w-3xl 2xl:max-w-4xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="relative">
        <div className="py-8 flex justify-between">
          <Link href="/">
            <a>
              <img 
                src="/papurika black.svg"
                className="h-14"
                alt="Website Logo" />
            </a>
          </Link>                
          {nav ? (
            <button type="button" className="md:hidden" onClick={() => setNav(false)}>
              <img src="/nav x.svg" className="w-8" alt="Hamburger Menu Button"/>
            </button>
          ) : (
            <button type="button" className="md:hidden" onClick={() => setNav(true)}>
              <img src="/nav white.svg" className="w-8" alt="Hamburger Menu Button"/>
            </button>
          )}        
          <ul className="hidden md:flex text-lg">
            <li className="mr-14">
              <Link href="/blog">
                <a className="link-hover">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="link-hover">Works</a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`${nav ? 'pb-10' : 'h-0'} w-full transition-all text-4xl flex flex-col items-center font-bold absolute bg-dark-blue z-10 shadow-lg overflow-hidden`}>
          <li className="mb-8">
            <Link href="/blog">
              <a className="link-hover">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="link-hover">Works</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
          { children }
      </main>      
    </div>
  )
}
