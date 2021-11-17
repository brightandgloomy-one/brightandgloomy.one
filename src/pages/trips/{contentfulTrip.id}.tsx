import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import dayjs from "dayjs"

const RichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a className="inline-flex items-center" href={node.data.uri} target="_blank" rel="noopener">
        {children}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    ),
  },
}

const Trip: React.FC<Record<string, any>> = ({ data }) => {
  return (
    <Layout>
      <section className="mb-10 text-center">
        <h1 className="text-2xl mb-4">{data.contentfulTrip.name}</h1>
        <p>
          {renderRichText(data.contentfulTrip.description, RichTextOptions)}
        </p>
      </section>
      <section className="mb-10 text-center">
        <ul>
          {data.contentfulTrip.members.map(member => (
            <li>{member.name}</li>
          ))}
        </ul>
      </section>
      {data.contentfulTrip.logs.map(log => (
        <section className="mb-10">
          <h1 className="text-gray-500 mb-4 font-bold text-center">
            {dayjs(log.date).format("D.MMM.YYYY HH:mm")}
          </h1>
          <p key={log.id}>{renderRichText(log.description, RichTextOptions)}</p>
        </section>
      ))}
    </Layout>
  )
}

export default Trip

export const query = graphql`
  query Trip($id: String) {
    contentfulTrip(id: { eq: $id }) {
      name
      description {
        raw
      }
      id
      members {
        name
      }
      logs {
        id
        name
        date
        description {
          raw
        }
      }
    }
  }
`
