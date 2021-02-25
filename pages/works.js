import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { motion } from "framer-motion"

export default function Works() {
  return (
    <Layout>
      <Head>
        <title>Works</title>
      </Head>
      <motion.div className="relative pt-10 text-center md:px-20 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h1 className="mb-10 font-heading text-2xl md:text-4xl">Under Construction</h1>
        <Image
            src="/literary-nonsense.gif"
            width={498}
            height={278}
            alt="Nonsense"
        />
      </motion.div>
    </Layout>
  )
}
