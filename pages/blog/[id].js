import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { DiscussionEmbed } from 'disqus-react';
import { getAllPostIds, getPostData } from '../../lib/posts'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'

export default function Post({ postData }) {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h1 className="font-heading text-4xl mb-2 lg:text-5xl">{postData.title}</h1>
        <div className="text-white text-opacity-80 mb-10">
          <Date dateString={postData.date} />
        </div>
        <div className="mb-12 max-h-480px">
          <img src={`/blogs/${postData.coverImage}`} className="block m-auto" alt="Blog Cover Image" />
        </div>
        <div className="mb-40 prose max-w-none my-0 mx-auto lg:prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <DiscussionEmbed
            shortname='mfaishal'
            config={
                {
                    url: `http://mfaishal.com${router.asPath}`,
                    identifier: `http://mfaishal.com${router.asPath}`,
                    title: postData.title
                }
            }
        />
      </motion.article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}