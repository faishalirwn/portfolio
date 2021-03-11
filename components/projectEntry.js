import Image from 'next/image'

export default function ProjectEntry({ title, coverImage, demoUrl, desc }) {
  return (
    <a href={demoUrl} target="_blank" rel="noopener noreferrer">
        <div className="bg-dark-blue-light flex flex-col min-h-21rem mb-5 md:w-56 md:mr-5 2xl:w-80 transform transition shadow-lg hover:-translate-y-2px hover:scale-102">
          <div className="overflow-hidden h-200px text-center">
              <Image
              src={`/projects/${coverImage}`}
              alt={`${title} project screenshot`}
              width={600}
              height={400}
              />
          </div>
          <div className="p-6">
            <div className="flex">
              <h3 className="font-bold text-2xl">
              {title}
              <img src="/icons/external-link.svg" className="ml-3 -mt-2 inline" alt="External Link Icon"/>
              </h3>
            </div>
            <p className="text-white text-opacity-50">{desc}</p>
          </div>
        </div>
    </a>
  )
}