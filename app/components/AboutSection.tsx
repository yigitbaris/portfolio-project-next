import Image from 'next/image'

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'TypeScript' },
  { skill: 'Node.js' },
  { skill: 'Express.js' },
  { skill: 'MongoDB' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'REST API' },
]

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
        </h1>
        <div className='flex flex-col space-y-10 items-stretch justify-center md:text-left md:p-4 md:space-y-0 md:space-x-10 align-top md:flex-row'>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              {' '}
              Hi, my name is Yiğit Barış I am a{' '}
              <span className='font-bold'>{'highly ambitious'}</span>,
              <span className='font-bold'>{' self-motivated'}</span>, and
              <span className='font-bold'>{' driven'}</span> software engineer
              based in İstanbul, Türkiye.
            </p>
            <br />
            <p>
              I graduated from Karabük University in 2019 with a BS in Computer
              Engineering and have been working in the field ever since.
            </p>

            <br />
            <p>
              I believe that you should{' '}
              <span className='font-bold text-teal-500'>
                never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              My Skills
            </h1>
            <div className='flex flex-wrap justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-4 text-gray-500 rounded font-semibold hover:animate-bgChange hover:bg-teal-500
                    hover:-translate-y-1 transition-transform cursor-pointer'
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src='/programming.svg'
              alt='coding'
              width={325}
              height={100}
              className='hidden md:block md:relative md:bottom-4 md:top-7 md:z-0'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
