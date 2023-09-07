import * as React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { SEO as Seo } from '../components/Seo';

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <section className="grow justify-center items-center flex text-xl sm:text-3xl">
        <h1 className="">This page doesn't exist for now</h1>
      </section>
      <Footer />
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
	<Seo title="Not found - Quentin Petit"/>
)