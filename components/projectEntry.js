import Image from "next/image";

export default function ProjectEntry({ title, coverImage, demoUrl, desc }) {
  return (
    <a
      href={demoUrl}
      className="block bg-dark-blue-light flex flex-col mb-5 md:min-h-21rem md:w-47% md:mr-5 transform transition shadow-lg hover:-translate-y-2px hover:scale-102"
      target="_blank"
      rel="noopener noreferrer"
    >
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
            <img
              src="/icons/external-link.svg"
              className="ml-3 -mt-2 inline"
              alt="External Link Icon"
            />
          </h3>
        </div>
        <p className="text-white text-opacity-50">{desc}</p>
      </div>
    </a>
  );
}
