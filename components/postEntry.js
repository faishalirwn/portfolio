import Link from 'next/link'
import Date from './date'

export default function PostEntry({ id, title, coverImage, date }) {
  return (
    <Link href={`/blog/${id}`}>
        <a>
            <div className="relative blog-entry-bg bg-dark-blue-light p-6 flex flex-col justify-between min-h-11rem mb-5 md:w-64 md:mr-5 2xl:w-80 transform transition shadow-lg hover:-translate-y-2px hover:scale-102">
                <h3 className="relative font-bold text-2xl">{title}</h3>
                <div className="relative self-end text-white text-opacity-50">
                <Date dateString={date} />
                </div>
            </div>
            <style jsx>{`
            .blog-entry-bg:before {
                background-image: url('blogs/${coverImage}');
            }
        `}</style>
        </a>
    </Link>
  )
}