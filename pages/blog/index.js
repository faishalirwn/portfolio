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
            <h1 className="blog-entry-bg font-heading text-5xl text-white text-opacity-50 md:text-7xl">Blog</h1>
            <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center">
                {allPostsData.map(({ id, title, coverImage, date }) => (
                    <Link href={`/blog/${id}`}>
                        <a>
                          <div className="blog-entry relative blog-entry-bg">
                              <h3 className="blog-entry-title">{title}</h3>
                              <div className="blog-entry-time">
                                <Date dateString={date} />
                              </div>
                          </div>
                          <style jsx>{`
                          .blog-entry-bg:before {
                            content: "";
                            background-image: url('${coverImage}');
                            background-size: cover;
                            position: absolute;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            opacity: 0.2;
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