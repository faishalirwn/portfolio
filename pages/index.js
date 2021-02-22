import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="px-4 pt-28 md:px-20 md:text-center">
        <div className="mb-6">
          <h1 className="font-heading text-5xl md:text-7xl md:mr-20">Faishal</h1>
          <h1 className="font-heading text-5xl ml-14 md:text-7xl md:ml-20">Irawan</h1>
        </div>
        <p className="mb-6 text-2xl text-white text-opacity-80 md:text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid</p>
        <div className="text-2xl flex flex-wrap md:justify-center">
          <a href="" className="mr-8">LinkedIn</a>
          <a href="" className="mr-8">Github</a>
          <a href="">Discord</a>
        </div>
      </div>
    </Layout>
  )
}
