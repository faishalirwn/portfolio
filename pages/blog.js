import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Blog() {
  return (
    <Layout>
        <div className="md:px-20">
            <h1 className="font-heading text-5xl text-white text-opacity-50 md:text-7xl">Blog</h1>
            <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center">
                <Link href="">
                    <a>
                        <div className="blog-entry">
                            <h3 className="blog-entry-title">Proclub Experience</h3>
                            <time className="blog-entry-time">22 Feb 2021</time>
                        </div>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <div className="blog-entry">
                            <h3 className="blog-entry-title">Proclub Experience</h3>
                            <time className="blog-entry-time">22 Feb 2021</time>
                        </div>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <div className="blog-entry">
                            <h3 className="blog-entry-title">Proclub Experience</h3>
                            <time className="blog-entry-time">22 Feb 2021</time>
                        </div>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <div className="blog-entry">
                            <h3 className="blog-entry-title">Proclub Experience</h3>
                            <time className="blog-entry-time">22 Feb 2021</time>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
  )
}
