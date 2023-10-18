import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Our Companies', href: '#section1' },
  { name: 'Future Projects', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },

  
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const buttonVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  }

  const posts = [
    {
      id: 1,
      title: 'New Play-Centre Opportunity in South East Kent',
      href: '#',
      description:
        'Are you looking for an exciting investment opportunity in the children’s play centre market?, then look no further. I am the owner of a successful play centre in Maidstone, which has seen a 30-50% growth in turnover despite the Covid pandemic. I have found an ideal location to open a new play centre in Thanet, Kent, where there is a high demand for a quality play centre for families with children. I am looking for an investor to help me fund the project. If you are interested in investing in a dynamic and diverse company that is always looking for new opportunities, contact Chimera Holdings today.',

      imageUrl:
        'https://happybackyards.com/wp-content/uploads/2016/02/18a-TOPC2-GRN-nobkg-Nov2020-900x600-1.png',
      date: '17th October 2023',
      datetime: '2020-03-16',
      category: { title: 'Opportunities', href: '#' },
      author: {
        name: 'Barry Sanders',
        role: 'Co-Founder',
        href: '#',
        imageUrl:
          '/StoreFront.png',
      },
    },
    {
        id: 1,
        title: 'Under performing Pub/Resturant in South East Kent',
        href: '#',
        description:
          'Are you looking for an exciting investment opportunity in the resturant business?.',
  
        imageUrl:
          'https://whatpub-new.s3.eu-west-1.amazonaws.com/images/pubs/800x600%402x/MAI-234-91678-good-intent-west-farleigh.jpg',
        date: '17th October 2023',
        datetime: '2020-03-16',
        category: { title: 'Opportunities', href: '#' },
        author: {
          name: 'Ashley Cook',
          role: 'Co-Founder',
          href: '#',
          imageUrl:
            '/StoreFront.png',
        },
      },
  ]

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-emerald-600 to-purple-900">
      <header className="absolute inset-x-0 top-0 z-50 bg-black">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-20 w-auto"
                src="/StoreFront.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/StoreFront.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-green-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Chimera: The future of leisure, hospitality and tech.

            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            Chimera Holdings is a holding company that operates in the leisure, hospitality and tech sectors. With over 20 years of experience in IT and running playcentres, Chimera Holdings has a proven track record of delivering innovative and customer-oriented solutions. Chimera Holdings is looking for funding for future projects that will expand its portfolio and create value for its stakeholders. If you are interested in investing in a dynamic and diverse company that is always looking for new opportunities, contact Chimera Holdings today. 

            </p>
            <p className="mt-6 text-lg leading-8 text-white">
            We have developed a cutting-edge internal system that takes care of the management of its leisure facility. The system integrates stock control, table and restaurant management, real-time analytics and predictions for customer trends and stock using its own in-house AI models. The system enables Chimera Holdings to optimize its operations, enhance its customer satisfaction, and increase its profitability. The system is a testament to Chimera Holdings' innovation and creativity in the leisure, hospitality and tech sectors.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-stone-200 px-3.5 py-2.5 text-sm font-semibold text-green-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white text-center sm:text-5xl">
            Our Current Portfolio
        </h1>
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
     
      <motion.div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3" id='section1'>
  <motion.button className="bg-white/5 p-8 sm:p-10" variants={buttonVariants} whileHover="hover" whileTap="tap">
    <img
      className="max-h-50 w-full object-contain"
      src="/versasoft.png"
      alt="Transistor"
      width={158}
      height={48}
    />
  </motion.button>
  <motion.button className="bg-white/5 p-8 sm:p-10" variants={buttonVariants} whileHover="hover" whileTap="tap">
    <img
      className="max-h-50 w-full object-contain"
      src="/insight.png"
      alt="Transistor"
      width={158}
      height={48}
    />
  </motion.button>
  <motion.button className="bg-white/5 p-8 sm:p-10" variants={buttonVariants} whileHover="hover" whileTap="tap">
    <img
      className="max-h-50 w-full object-contain"
      src="/3.png"
      alt="Transistor"
      width={158}
      height={48}
    />
  </motion.button>
  <motion.button className="bg-white/5 p-6 sm:p-10" variants={buttonVariants} whileHover="hover" whileTap="tap">
    <img
      className="max-h-12 w-full object-contain"
      src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
      alt="Laravel"
      width={158}
      height={48}
      
    />

  </motion.button>
  <motion.button className="bg-white/5 p-6 sm:p-10" variants={buttonVariants} whileHover="hover" whileTap="tap">
    <img
      className="max-h-12 w-full object-contain"
      src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
      alt="SavvyCal"
      width={158}
      height={48}
    />
  </motion.button>
  <motion.button className="bg-white/5 p-6 sm:p-10" variants={buttonVariants} whileHover="hover" whileTap="tap">
    <img
      className="max-h-12 w-full object-contain"
      src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
      alt="Statamic"
      width={158}
      height={48}
    />
  </motion.button>
</motion.div>
      </div>
    </div>
   


    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Learn About Our Future Projects</h2>
          
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-white">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-blue-500 px-3 py-1.5 font-medium text-white hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-black" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-white">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>



    </div>
    
  )
}
