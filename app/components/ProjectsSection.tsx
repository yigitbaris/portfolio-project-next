import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: 'Comfy Sloth',
    description:
      'Jobify is a full-stack web app that doctors and hospitals can use in order to maintain their shift times , department and locations.',
    image:
      'https://private-user-images.githubusercontent.com/72226361/260697384-86804936-ac0c-437c-9acf-ab2c37411a8d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkxNzcyMTcsIm5iZiI6MTcyOTE3NjkxNywicGF0aCI6Ii83MjIyNjM2MS8yNjA2OTczODQtODY4MDQ5MzYtYWMwYy00MzdjLTlhY2YtYWIyYzM3NDExYThkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE3VDE0NTUxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg2YTI0M2FjYTBjMDA0NTg4OGM0M2NhYjQ4ZDgxYWJmMWM1ZTY3ODVkOGI5NDdkODhlM2JmOWUzMjE2OTIyZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UJmdR4cULYSjYGEWiMffW980sZB1I_63tBalXelZGyA',
    github: 'https://github.com/yigitbaris/react-comfy-sloth',
    link: 'https://comfysloth-reactapp.netlify.app/',
  },
  {
    name: 'Next.js Full-Stack',
    description:
      'Jobify is a full-stack web app that doctors and hospitals can use in order to maintain their shift times , department and locations.',
    image:
      'https://private-user-images.githubusercontent.com/72226361/377506520-b7bf9fca-4a61-486d-8627-628f6beae22f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkxNzc0NTUsIm5iZiI6MTcyOTE3NzE1NSwicGF0aCI6Ii83MjIyNjM2MS8zNzc1MDY1MjAtYjdiZjlmY2EtNGE2MS00ODZkLTg2MjctNjI4ZjZiZWFlMjJmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE3VDE0NTkxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTczODdhZDVhZmE0NTA4NjM4YWY1YjRlMjQxNzQzOTQ1MzNiOWI1NDFkMTBjZTMzNDhlOTA4ZWNkMjBiNjY0OTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.vYe6hmZ0LTIlz2viaLxO9SYzZ_Doe-Ms6JZS6jitMSc',
    github: 'https://github.com/yigitbaris/next.js-full-stack',
    link: 'https://github.com/yigitbaris/next.js-full-stack',
  },
  {
    name: 'Jobify - Senior Project Web',
    description:
      'Jobify is a full-stack web app that doctors and hospitals can use in order to maintain their shift times , department and locations.',
    image:
      'https://private-user-images.githubusercontent.com/72226361/377425519-1287bf76-3631-4c46-89ba-d32f5e66ee33.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkxNzc1NzgsIm5iZiI6MTcyOTE3NzI3OCwicGF0aCI6Ii83MjIyNjM2MS8zNzc0MjU1MTktMTI4N2JmNzYtMzYzMS00YzQ2LTg5YmEtZDMyZjVlNjZlZTMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE3VDE1MDExOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlYTkyMjBmNTM1MGI0NzI1YTU3Mzk3YzJmZWQ2YWZmMzIzOTAyZDg2NzIyMmExY2RkMGE5N2ZmZmM1OTczNDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UequmzeaqQ78ZY-8nKOmyiynaP7vNH1aHb5Q53ceiMI',
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
