import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="font-heading text-4xl mb-2 lg:text-5xl">{postData.title}</h1>
        <div className="text-white text-opacity-75 mb-10">
          <Date dateString={postData.date} />
        </div>
        <div className="mb-10">
          <img src={postData.coverImage} alt="Blog Cover Image" />
        </div>
        <div className="prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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