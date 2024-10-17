import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: 'Comfy Sloth',
    description:
      'This project was created with React, and I use styled-components for styling. I utilize an external furniture API for data and list furniture on the home page. Users can navigate to the detail page by clicking on an image, and filtering and sorting algorithms are available. Products can be added to the cart, and quantities can be adjusted on the cart page. I implemented the login and payment functionality using external services, specifically Auth0 for login and Stripe for checkout. There is a breadcrumbs navigation at the top of the page that allows for quick page changes. ',
    image: '/comfy.png',
    github: 'https://github.com/yigitbaris/react-comfy-sloth',
    link: 'https://comfysloth-reactapp.netlify.app/',
  },
  {
    name: 'Next.js Full-Stack',
    description:
      'Jobify is a full-stack web app that doctors and hospitals can use in order to maintain their shift times , department and locations.',
    image: '/next.png',
    github: 'https://github.com/yigitbaris/next.js-full-stack',
    link: 'https://github.com/yigitbaris/next.js-full-stack',
  },
  {
    name: 'Jobify - Senior Project Web',
    description:
      'Jobify is a full-stack web app that doctors and hospitals can use in order to maintain their shift times , department and locations.',
    image: '/senior.png',
    github: 'https://github.com/yigitbaris/senior-project',
    link: 'https://github.com/yigitbaris/senior-project',
  },
  {
    name: 'Jobify - Senior Project Mobile',
    description:
      'Jobify is a full-stack web app that doctors and hospitals can use in order to maintain their shift times , department and locations.',
    image: '/mobil.png',
    github: 'https://github.com/yigitbaris/senior-project-mobil',
    link: 'https://github.com/yigitbaris/senior-project-mobil',
  },
]

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
      </h1>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col animate-slideUpCubiBezier animationDelay-2 md:flex-row md:space-x-12'>
                  <div className='mt-12 md:w-1/2'>
                    <Link href={project.link} target='_blank'>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={200}
                        className='rounded-xl shadow-xl hover:opacity-70 '
                      />
                    </Link>
                  </div>
                  <div className='mt-12 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 '>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default ProjectsSection
