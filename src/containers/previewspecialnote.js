import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpecialNoticeComponent from "../components/notice/special"

const SpecialNoticeContainer = ({ data }) => {
    let getDescription = n => {
        if (n.metadescription.text) {
            return n.metadescription.text
        } else {
            return false
        }
    }
    const notice = data.prismicNoticiasEspeciales
    const common = data.prismicDatosComunes.data
    const description =
        getDescription(notice.data) || common.metadescription.text || ""
    const keywords =
        notice.data.metakeywords.text || common.metakeywords.text || ""
    const image = notice.data.banner.url || false
    return (
        <Layout minify>
            <SEO
                title={notice.data.title.text}
                description={description}
                keywords={keywords}
                image={image}
            />
            <SpecialNoticeComponent
                notice={notice}
                related={data.relatedNotes}
                site={data.site.siteMetadata}
                url=''
            />
        </Layout>
    )
}

export default SpecialNoticeContainer
