import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: 'Comfy Sloth',
    description:
      'This React project uses styled-components for styling and an external furniture API to list products on the home page. Users can view product details by clicking images, with filtering and sorting features available. The cart allows quantity adjustments, and login/payment is handled via Auth0 and Stripe. Breadcrumbs at the top provide easy navigation between pages.',
    image: '/comfy.png',
    github: 'https://github.com/yigitbaris/react-comfy-sloth',
    link: 'https://comfysloth-reactapp.netlify.app/',
  },
  {
    name: 'Next.js Full-Stack',
    description:
      'This full-stack e-commerce website is built with Next.js, featuring a responsive design and robust functionality. It uses MongoDB and Prisma for database management and a Node.js server for backend operations. The site includes Google authentication, Firebase storage for image uploads, and an add-to-cart feature. Admins can easily manage products, including adding new ones and viewing all listed products through the dedicated admin page.',
    image: '/next.png',
    github: 'https://github.com/yigitbaris/next.js-full-stack',
    link: 'https://github.com/yigitbaris/next.js-full-stack',
  },
  {
    name: 'Jobify - Senior Project Web',
    description:
      'This project digitalizes hospital shift management to improve efficiency and simplify scheduling. It saves time, reduces errors, and eases the workload for administrators and doctors. Built with the MERN Stack , it includes admin and doctor roles, JWT-secured connections, and encrypted password storage. Users can update profiles, with dark/light mode support stored in localStorage. The application is fully responsive, adjusting layouts and sidebars based on screen size for an optimized user experience.',
    image: '/senior.png',
    github: 'https://github.com/yigitbaris/senior-project',
    link: 'https://github.com/yigitbaris/senior-project',
  },
  {
    name: 'Jobify - Senior Project Mobile',
    description:
      'This project brings the hospital shift management system to mobile using React Native, allowing greater accessibility. Both the mobile and web apps share the same server and database for seamless synchronization.',
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
                    <p className='text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400 '>
                      {project.description}
                    </p>
                    <div className='flex flex-row justify-center md:justify-normal align-bottom  space-x-4'>
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
