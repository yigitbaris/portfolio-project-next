import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <title>Yiğit Barış Kaynakoğlu</title>
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
