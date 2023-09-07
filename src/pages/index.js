import * as React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import DocumentIcon from "../assets/document.svg";
import { Link } from 'gatsby'
import { SEO as Seo } from '../components/Seo';

const IndexPage = () => {
return (
	<main className="selection:bg-red-300">
		<header className="flex flex-col h-screen">
			<Navbar />
			<section className="grow">
				<div className="mx-auto h-full flex flex-col justify-center max-w-xs sm:max-w-lg lg:max-w-4xl px-4">
					<h1 className="font-bold pb-5 text-4xl sm:text-7xl lg:text-8xl">Quentin Petit.</h1>
					<h2 className="text-xl w-fit mb-8 sm:text-4xl lg:text-4xl"><span className="bg-red-600">Engineering student at ISAE Supmeca</span></h2>
					<p className="text-gray-500 mb-2">🛠️ Currently working for Nexter Robotics</p>
					<p className="text-gray-500 mb-8">💡 "To have done more for the world than the world has done for you: that's success.", Henry Ford</p>
					<div className="flex-column lg:flex">
						<a href="/cv.pdf" className="mr-4">
							<div className="lg:w-32 py-3 rounded bg-black text-center w-full hover:text-red-400 transition-colors">
								<div className="flex justify-center items-center">
									<DocumentIcon width="1rem" fill="red"/>
									<p className="ml-2">CV</p>
								</div>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/quentinptt" target="_blank" rel="noreferrer" className="mr-4">
							<div className="lg:w-32 py-3 rounded bg-black text-center w-full hover:text-red-400 transition-colors">
								<div className="flex justify-center items-center">
									<LinkedinIcon width="1.2rem" fill="red"/>
									<p className="ml-2">Linkedin</p>
								</div>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/quentinptt" target="_blank" rel="noreferrer" className="mr-4">
							<div className="lg:w-32 py-3 rounded bg-black text-center w-full hover:text-red-400 transition-colors">
								<div className="flex justify-center items-center">
									<GithubIcon width="1rem" fill="red"/>
									<p className="ml-2">Github</p>
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>
		</header>
		<section className="mb-32">
			<div className="mx-auto h-full flex flex-col max-w-xs sm:max-w-lg lg:max-w-4xl px-4">
				<h2 className="text-gray-400 text-2xl">My recent articles</h2>
				<Link to="/about" className="flex flex-nowrap py-4 cursor-pointer hover:text-red-400 transition-colors">
					<p className="mr-10 text-red-600 whitespace-nowrap">AUG 23, 2023</p>
					<p className="overflow-hidden whitespace-nowrap text-ellipsis">Who am I ?</p>
				</Link>
			</div>
		</section>
		<Footer	/>
	</main>
)}

export default IndexPage

export const Head = () => (
	<Seo title="Quentin Petit"/>
)
