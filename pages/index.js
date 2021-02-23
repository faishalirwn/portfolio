import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Faishal Irawan</title>
      </Head>
      <div className="px-4 pt-28 md:px-20 md:text-center">
        <div className="mb-10">
          <h1 className="font-heading text-5xl md:text-7xl md:mr-20">Faishal</h1>
          <h1 className="font-heading text-5xl ml-14 md:text-7xl md:ml-20">Irawan</h1>
        </div>
        <p className="mb-10 text-2xl text-white text-opacity-100 md:text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid</p>
        <div className="text-2xl flex flex-wrap md:justify-center">
          <a href="https://www.linkedin.com/in/faishalirwn/" className="mr-8 link-hover">LinkedIn</a>
          <a href="https://github.com/faishalirwn" className="mr-8 link-hover">Github</a>
          <a href="mailto:faishalirwn@pm.me" className="link-hover">Email</a>
        </div>
      </div>
    </Layout>
  )
}
