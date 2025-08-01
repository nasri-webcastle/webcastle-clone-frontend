'use client'

import Image from 'next/image'

const blogPosts = [
  {
    title: 'Why Loyalty Programs Work So Well for Subscription-Based...',
    date: 'July 21 2025',
    image: '/images/home/homeblog1.webp',
    featured: true,
  },
  {
    title: 'Introducing Castle AR: Revolutionising Digital Experienc...',
    date: 'July 2 2025',
    image: '/images/home/homeblog2.webp',
    featured: true,
  },
  {
    title: 'WebCastle’s Journey to Digital Excellence',
    date: 'June 19 2025',
    image: '/images/home/BLOG3.webp',
    featured: true,
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 px-6 md:px-16  text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 text-left">
          <div>
            <h3 className="text-green-600 text-medium font-semibold uppercase mb-3">BLOG & NEWS</h3>
            <h2 className="text-3xl font-bold text-[#000000] mt-1 mb-6">Top Stories From Our Castle</h2>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative inline-flex items-center justify-center px-9 py-3 border border-black text-black text-semibold rounded-full overflow-hidden group transition-all duration-1000 hover:border-gray-400">
            {/* Sliding Background */}
            <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2000ms] ease-in-out z-0"></span>

            {/* Text stays on top */}
            <span className="relative z-10 transition-colors duration-700 ease-in-out group-hover:text-white">
              View All
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white  overflow-hidden text-left transition">
              <div className="relative h-56 w-full mb-6 group overflow-hidden">
                {/* Image */}
                <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300 group-hover:brightness-75"
                />

                {/* Overlay blend on hover */}
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-40 transition duration-300 mix-blend-multiply"></div>

                  {/* Featured badge top-left */}
                  {post.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-green-600 px-2 py-1 text-white text-medium  font-medium">
                            FEATURED
                        </span>
                      </div>
                  )}
                </div>
              
              <div className="">                
                <h3 className="mt-3 text-xl  text-black leading-snug mb-3">{post.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-medium mb-5 text-gray-500">
                  <p>BLOG</p>
                  <div className="h-4 w-px bg-gray-400"></div> {/* vertical line */}
                  <p>{post.date}</p>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
