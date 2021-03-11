import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { motion } from "framer-motion"
import { getSortedProjectsData } from '../lib/projects'

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <motion.div className="relative md:px-20 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h1 className="font-heading text-5xl text-white text-opacity-50 md:text-7xl">Projects</h1>
            <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center">
              {allProjectsData.map(({title, coverImage, demoUrl, desc}) => (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <div className="bg-dark-blue-light flex flex-col justify-between min-h-10 mb-5 md:w-56 md:mr-5 2xl:w-72 transform transition shadow-lg hover:-translate-y-2px hover:scale-102">
                    <div className="overflow-hidden h-200px text-center">
                      <Image
                        src={`/projects/${coverImage}`}
                        alt={`${title} project screenshot`}
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="blog-entry-title">
                        {title}
                        <svg className="ml-3 -mt-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </h3>
                      <p className="text-white text-opacity-50">{desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
      </motion.div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}