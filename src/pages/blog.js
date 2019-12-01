import React from "react"
import BlogLayout from "../components/bloglayout"
import { Link, graphql } from "gatsby"
import Logo from "../assets/logo.jpg"

export default ({ data }) => {
  return (
    <BlogLayout>
      <div
        style={{
          padding: `1rem`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <img
          src={Logo}
          style={{
            height: `30vw`,
            borderRadius: `30vw`,
            border: `.2rem solid white`,
            marginRight: `1rem`,
          }}
        />
        <div style={{ display: `flex`, flexDirection: `column` }}>
          <h1 style={{ margin: `1rem 0` }}>PSKのブログ</h1>
          ふだんの活動の報告や、ガムランの曲や楽器について紹介をしています！
        </div>
      </div>
      <div style={{ marginRight: `2rem`, marginLeft: `2rem` }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <div
              key={node.id}
              style={{
                backgroundColor: `white`,
                borderRadius: `.5rem`,
                marginTop: `2rem`,
                display: `flex`,
                alignContent: `center`,
                flexDirection: `column`,
                padding: `0 1rem`,
              }}
            >
              <h3 style={{ margin: `.5rem 0` }}>{node.frontmatter.title}</h3>
              {node.frontmatter.date}
              <p>{node.excerpt.slice(0, 45)} ...</p>
            </div>
          </Link>
        ))}
      </div>
    </BlogLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
