import Head from 'next/head'
import Layout from '../../components/layout'
import PostEntry from '../../components/postEntry'
import { getSortedPostsData } from '../../lib/posts'
import { motion } from "framer-motion"

export default function Blog({ allPostsData }) {
  return (
    <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <motion.div className="md:px-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1 className="font-heading text-5xl text-white text-opacity-50 md:text-7xl">Blog</h1>
            <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center">
                {allPostsData.map(({ id, title, coverImage, date }) => (
                  <PostEntry
                    id={id}
                    title={title}
                    coverImage={coverImage}
                    date={date}
                  />
                ))}
            </div>
        </motion.div>        
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