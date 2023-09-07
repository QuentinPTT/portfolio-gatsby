import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { graphql } from "gatsby"
import * as styles from './article.module.css'
import { SEO as Seo } from '../components/Seo';

export default function Article({ data }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const imagePath = require(`../images/${frontmatter.image}`)
  return (
    <main className="selection:bg-red-300">
        <Navbar />
        <section className="my-10">
            <h2 className='text-center text-gray-400 text-lg'>{frontmatter.date}</h2>
            <h1 className='max-w-4xl mx-auto text-center text-5xl font-bold mb-10'>{frontmatter.title}</h1>
            <img className='max-w-4xl w-full object-cover	h-72 px-6 mx-auto mb-10' draggable='false' src={imagePath.default} alt='a soldat'/>
            <article className={`max-w-3xl m-auto px-6 leading-relaxed ${styles.articleContainer}`}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </section>
        <Footer />
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={`${data.markdownRemark.frontmatter.title} - Quentin Petit`} />
);

