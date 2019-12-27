import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NormalNoticeComponent from "../components/notice/normal"

const NormalNoticeContainer = ({ data }) => {
    let getDescription = data => {
        if (data.metadescription.text) {
            return data.metadescription.text
        } else {
            return data.content.text.substring(0, 200)
        }
    }
    const image = data.prismicNoticias.data.banner.url || false
    return (
        <Layout>
            <SEO
                title={data.prismicNoticias.data.title.text}
                description={getDescription(data.prismicNoticias.data)}
                keywords={data.prismicNoticias.data.metakeywords.text || ""}
                image={image}
            />
            <NormalNoticeComponent
                notice={data.prismicNoticias}
                related={data.relatedNotes}
                site={data.site.siteMetadata}
                url=''
            />
        </Layout>
    )
}

export default NormalNoticeContainer