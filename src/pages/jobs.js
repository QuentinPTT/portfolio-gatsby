import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import jobs from "../content/jobs.json"
import RightComponent from '../components/RightComponent'
import LeftComponent from '../components/LeftComponent'
import { SEO as Seo } from '../components/Seo';



export default function portfolio() {
  return (
    <main className="selection:bg-red-300">
        <Navbar />
        <section className='my-10 max-w-sm sm:max-w-3xl lg:max-w-6xl px-4 mx-auto'>
            <h1 className='text-center text-5xl font-bold mb-10'>Where i <span className='bg-red-600'>worked</span> ?</h1>
            <div>
                {jobs.map((job, index) => (
                    index % 2 === 0
                    ? <RightComponent key={index} project={job} />
                    : <LeftComponent key={index} project={job} />
                ))}
            </div>
        </section>
        <Footer />
    </main>
  )
}

export const Head = () => (
	<Seo title="Jobs - Quentin Petit"/>
)