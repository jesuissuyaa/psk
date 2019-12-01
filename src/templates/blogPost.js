import React from "react"
import BlogLayout from "../components/blogLayout"
import { graphql, Link } from "gatsby"
import Logo from "../assets/logo.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const BlogPostHeader = () => {
  return (
    <Link
      to="/blog/"
      style={{ display: `flex`, padding: `1rem`, textDecoration: `none` }}
    >
      <img
        src={Logo}
        style={{
          height: `20vw`,
          borderRadius: `10vw`,
          border: `.2rem solid white`,
          marginRight: `1rem`,
        }}
      />
      <h1 style={{ color: `#222` }}>PSKのブログ</h1>
    </Link>
  )
}

const BlogPostFooter = () => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        padding: `1rem`,
      }}
    >
      <div style={{ display: `flex`, alignItems: `center` }}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="lg"
          style={{ marginRight: `.5rem` }}
        />
        前の記事
      </div>
      <Link to="/blog" style={{ textDecoration: `none`, color: `#000` }}>
        ブログトップ
      </Link>
      <div style={{ display: `flex`, alignItems: `center` }}>
        次の記事
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          style={{ marginLeft: `.5rem` }}
        />
      </div>
    </div>
  )
}
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <BlogLayout>
      <BlogPostHeader />
      <div
        style={{
          backgroundColor: `white`,
          borderRadius: `.5rem`,
          marginTop: `2rem`,
          margin: `0 2rem 0`,
          display: `flex`,
          alignContent: `center`,
          flexDirection: `column`,
          padding: `0 1rem`,
        }}
      >
        <h3>{post.frontmatter.title}</h3>
        <h4>{post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <BlogPostFooter />
    </BlogLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
