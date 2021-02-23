import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getSortedPostsData } from '../../lib/posts'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <div className="md:px-20">
            <h1 className="font-heading text-5xl text-white text-opacity-50 md:text-7xl">Blog</h1>
            <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center">
                {allPostsData.map(({ id, title, coverImage, date }) => (
                    <Link href={`/blog/${id}`}>
                        <a>
                          <div className="blog-entry relative blog-entry-bg">
                              <h3 className="relative blog-entry-title">{title}</h3>
                              <div className="relative blog-entry-time">
                                <Date dateString={date} />
                              </div>
                          </div>
                          <style jsx>{`
                          .blog-entry-bg:before {
                            background-image: url('${coverImage}');
                          }
                        `}</style>
                        </a>
                    </Link>
                ))}
            </div>
        </div>        
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}