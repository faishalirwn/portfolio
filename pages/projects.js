import Head from 'next/head'
import Layout from '../components/layout'
import ProjectEntry from '../components/projectEntry'
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
                <ProjectEntry
                  title={title}
                  coverImage={coverImage}
                  demoUrl={demoUrl}
                  desc={desc}
                />
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