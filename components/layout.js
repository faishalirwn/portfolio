import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="text-white font-sans px-6 mx-auto my-0 sm:max-w-3xl 2xl:max-w-4xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="py-8 flex justify-between">
        <Link href="/">
          <a>
            <img 
              src="/papurika black.svg"
              className="h-14"
              alt="Website Logo" />
          </a>
        </Link>
        <button type="button" className="md:hidden">
          <img src="/nav white.svg" className="w-10" alt="Hamburger Menu Button"/>
        </button>
        <ul className="hidden md:flex text-lg">
          <li className="mr-14">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Works</a>
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
