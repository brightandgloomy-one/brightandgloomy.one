import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      {data.allContentfulTrip.nodes.length > 0 && (
        <ul>
          {data.allContentfulTrip.nodes.map(node => (
            <li>
              <Link to={`trips/${node.id}`}>{node.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {data.allContentfulTrip.nodes.length === 0 && (
        <p>It seems like everyone is staying at home.</p>
      )}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ongoingTrips {
    allContentfulTrip {
      nodes {
        id
        name
      }
    }
  }
`
