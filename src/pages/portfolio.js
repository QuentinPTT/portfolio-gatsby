import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import projects from "../content/projects.json"
import RightComponent from '../components/RightComponent'
import LeftComponent from '../components/LeftComponent'
import { SEO as Seo } from '../components/Seo';



export default function portfolio() {
  return (
    <main className="selection:bg-red-300">
        <Navbar />
        <section className='my-10 max-w-sm sm:max-w-3xl lg:max-w-6xl px-4 mx-auto'>
            <h1 className='text-center text-5xl font-bold mb-10'>Some <span className='bg-red-600'>projects</span></h1>
            <div>
                {projects.map((project, index) => (
                    index % 2 === 0
                    ? <RightComponent key={index} project={project} />
                    : <LeftComponent key={index} project={project} />
                ))}
            </div>
        </section>
        <Footer />
    </main>
  )
}

export const Head = () => (
	<Seo title="Portfolio - Quentin Petit"/>
)