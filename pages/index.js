import Head from "next/head";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import FeaturedProjectEntry from "../components/featuredProjectEntry";
import { getSortedProjectsData } from "../lib/projects";

export default function Home({ featuredProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Faishal Irawan</title>
      </Head>
      <motion.div
        className="relative py-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="md:px-20 md:text-center">
          <div className="mb-10">
            <h1 className="font-heading text-5xl md:text-7xl md:mr-20">
              Faishal
            </h1>
            <h1 className="font-heading text-5xl ml-14 md:text-7xl md:ml-20">
              Irawan
            </h1>
          </div>
          <p className="mb-10 text-2xl text-white text-opacity-75 md:text-3xl">
            Hi, I'm a CS Student and an aspiring Front-end Developer.
          </p>
          <div className="text-xl flex flex-wrap md:justify-center md:text-2xl">
            <a
              href="https://www.linkedin.com/in/faishalirwn/"
              className="mr-8 social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/faishalirwn"
              className="mr-8 social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="mailto:faishalirwn@gmail.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
          <div
            style={{
              backgroundImage: "url('/solen-feyissa-bYpqDs-lVJ8-unsplash.jpg')",
              zIndex: "-1",
            }}
            className="absolute top-0 right-0 w-200px h-300px bg-no-repeat bg-cover opacity-40 md:w-500px md:h-600px md:-right-32"
          ></div>
        </header>
        <section className="mt-36 md:mt-60">
          <h1 className="font-heading text-4xl text-white text-opacity-50 md:text-6xl">
            Featured Projects
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center">
            {featuredProjectsData.map(
              ({ title, coverImage, demoUrl, desc }) => (
                <FeaturedProjectEntry
                  title={title}
                  coverImage={coverImage}
                  demoUrl={demoUrl}
                  desc={desc}
                />
              )
            )}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const featuredProjectsData = allProjectsData.filter(
    (project) => project.featured
  );
  return {
    props: {
      featuredProjectsData,
    },
  };
}
