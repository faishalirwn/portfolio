import Image from 'next/image'

export default function ProjectEntry({ title, coverImage, demoUrl, desc }) {
  return (
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
              <h3 className="font-bold text-2xl">
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
  )
}