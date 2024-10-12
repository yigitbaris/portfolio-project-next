'use client'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
        <div className='w-1/2 mt-2'>
          <Image
            className='rounded-full'
            src='/headshot.jpg'
            alt=''
            width={300}
            height={300}
          />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl '>
            Hi, I&#39;m Barış!
          </h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I&#39;m a{' '}
            <span className='font-semibold text-teal-600'>
              Software Engineer{' '}
            </span>
            based in Istanbul, Türkiye. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            to='projects'
            className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  )
}
export default HeroSection
