import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript"
import PrismicDOM from 'prismic-dom'

//containers
import SpecialNoticeContainer from '../containers/previewspecialnote'
import NormalNoticeContainer from '../containers/previewnormalnote'

const Elements = PrismicDOM.RichText.Elements

const htmlSerializer = (
  type,
  element,
  content,
  children
) => {
  if (type === Elements.image) {
    return `OBJIMG${element.url}${element.alt ? `|${element.alt}` : ''}OBJIMG`;
  }
  if (type === Elements.preformatted) {
    //console.log("element", element)
    return `${element.text}`
  }
  return null
}
const linkResolver = function (doc) {
  if (doc.type === 'page') return "/" + doc.uid;
  if (doc.type === 'noticias_especiales') return "/noticias-especiales/" + doc.uid;
  if (doc.type === 'noticias') return "/noticias/" + doc.uid;
  return "/" + doc.uid;

};

const Preview = ({ data, data: { site: { siteMetadata: { API_KEY, API_URL } } } }) => {
  const [pageType, setPageType] = useState('');
  const [post, setPost] = useState('');
  const [documentId, setDocumentId] = useState('');

  useEffect(() => {
    const qryString = window.location.search.slice(1);
    const qryStrParams = qryString.split('&');
    const strParams = qryStrParams.map(item => item.split('='));
    const [paramName, docId] = strParams.find(item => item[0] === 'documentId')
    const [paramToken, token] = strParams.find(item => item[0] === 'token')

    if (docId !== documentId) {
      Prismic.getApi(API_URL, { accessToken: API_KEY })
        .then(api =>
          api.query(
            Prismic.Predicates.at('document.id', docId),
            { lang: '*', ref: token }
          )
        )
        .then(response => {
          if (response.results.length === 0) {
            // No data! D:
            setPageType('page-not-found');
          } else {
            const rawData = { ...response.results[0] };
            setDocumentId(rawData.id)
            //console.log('RAW', rawData)
            if (rawData.type === 'noticias_especiales') {
              setPageType('noticias_especiales');
              const {
                uid,
                id: prismicId,
                last_publication_date,
                type,
                data: {
                  custom_publishdate,
                  title: [title = { text: '' }],
                  metadescription: [metadescription = { text: '' }],
                  metakeywords: [metakeywords = { text: '' }],
                  banner = {
                    url: '',
                    alt: ''
                  },
                  author: rawAuthors,
                  alliances: rawAlliances,
                  body: rawBody
                }
              } = rawData

              const author = rawAuthors.length === 0
                ? [{
                  user_picture: { url: '' },
                  name: { text: '' },
                  author_rol: { text: '' },
                  email: { text: '' },
                  facebook: { text: '' },
                  instagram: { text: '' },
                  twitter: { text: '' }
                }]
                : rawAuthors.map(({
                  user_picture: [user_picture = { url: '' }],
                  name: [name = { text: '' }],
                  author_rol: [author_rol = { text: '' }],
                  email: [email = { text: '' }],
                  facebook: [facebook = { text: '' }],
                  instagram: [instagram = { text: '' }],
                  twitter: [twitter = { text: '' }]
                }) => ({
                  user_picture,
                  name,
                  author_rol,
                  email,
                  facebook,
                  instagram,
                  twitter
                }));

              const alliances = rawAlliances.length === 0
                ? [{
                  alliance_image: { url: '', alt: '' },
                  alliance_url: { url: '' },
                  alliance_name: { text: '' }
                }]
                : rawAlliances.map(({
                  alliance_image = { url: '', alt: '' },
                  alliance_url = { url: '' },
                  alliance_name: [alliance_name = { text: '' }]
                }) => ({
                  alliance_image,
                  alliance_url,
                  alliance_name
                }));

              const body = rawBody.length === 0 ? [] : rawBody.map(({ slice_type, ...item }) => {
                if (slice_type === 'graficas' || slice_type === 'grafica_de_barras' || slice_type === 'grafica_de_pay') {
                  const {
                    primary: {
                      chart_title: [chart_title = { text: '' }],
                      axis_x: [axis_x = { text: '' }],
                      eje_y: [eje_y = { text: '' }],
                    },
                    items: itemsRaw
                  } = item;
                  const bodyItems = itemsRaw.length === 0 ? []
                    : itemsRaw.map((item) => {
                      //console.log('SECTIOM!!!!!!!!!!!', item);
                      if (!item.section) return { section: { text: '' }, values: [] }
                      const { section: [section = { text: '' }], values = [] } = item
                      return {
                        section,
                        values: {
                          text: values.reduce((result, i) => {
                            return `${result} ${i.text}`
                          }, '')
                        }
                      }
                    })
                  const primaryValues = !item.primary.values || item.primary.values.length === 0 ? ''
                    : item.primary.values.reduce((result, i) => (`${result} ${i.text}`), '')
                  //console.log('BODY ITEMS', primaryValues)
                  return {
                    ...item,
                    slice_type,
                    primary: {
                      ...item.primary,
                      chart_title,
                      axis_x,
                      eje_y,
                      values: { text: primaryValues }
                    },
                    items: bodyItems
                  }
                } else {
                  const {
                    primary: {
                      content = []
                    },
                    items
                  } = item;
                  const bodyItems = items.length === 0 ? []
                    : items.map(({ itemContent = [] }) => ({
                      content: { html: PrismicDOM.RichText.asHtml(itemContent, linkResolver, htmlSerializer) }
                    }))

                  return {
                    ...item,
                    slice_type,
                    primary: {
                      ...item.primary,
                      content: { html: PrismicDOM.RichText.asHtml(content, linkResolver, htmlSerializer) },
                    }
                  }
                }

                //return { ...item, slice_type };

              });

              //console.log('POST BODY', body)
              setPost({
                uid,
                prismicId,
                last_publication_date,
                type,
                data: {
                  custom_publishdate,
                  title,
                  metadescription,
                  metakeywords,
                  banner,
                  author,
                  alliances,
                  body
                }
              });
            } else if (rawData.type === 'noticias') {
              setPageType('noticias');
              const {
                uid,
                id: prismicId,
                last_publication_date,
                type,
                data: {
                  custom_publishdate,
                  title: [title = { text: '' }],
                  alliance_name: [alliance_name = { text: '' }],
                  alliance_link,
                  metadescription: [metadescription = { text: '' }],
                  metakeywords: [metakeywords = { text: '' }],
                  banner = {
                    url: '',
                    alt: ''
                  },
                  author: rawAuthors,
                  content
                }
              } = rawData

              const author = rawAuthors.length === 0
                ? [{
                  user_picture: { url: '' },
                  name: { text: '' },
                  author_rol: { text: '' },
                  email: { text: '' },
                  facebook: { text: '' },
                  instagram: { text: '' },
                  twitter: { text: '' }
                }]
                : rawAuthors.map(({
                  user_picture = { url: '' },
                  name = { text: '' },
                  author_rol = { text: '' },
                  email = { text: '' },
                  facebook = { text: '' },
                  instagram = { text: '' },
                  twitter = { text: '' }
                }) => ({
                  user_picture,
                  name,
                  author_rol,
                  email,
                  facebook,
                  instagram,
                  twitter
                }));
              // console.log('RA al', rawAlliances)
              // const alliances = rawAlliances.length === 0
              //   ? [{
              //     alliance_image: { url: '', alt: '' },
              //     alliance_url: { url: '' },
              //     alliance_name: { text: '' }
              //   }]
              //   : rawAlliances.map(({
              //     alliance_image = { url: '', alt: '' },
              //     alliance_url = { url: '' },
              //     alliance_name = { text: '' }
              //   }) => ({
              //     alliance_image,
              //     alliance_url,
              //     alliance_name
              //   }));


              setPost({
                uid,
                prismicId,
                last_publication_date,
                type,
                data: {
                  custom_publishdate,
                  title,
                  metadescription,
                  metakeywords,
                  banner,
                  author,
                  alliance_link,
                  alliance_name,
                  content: { html: PrismicDOM.RichText.asHtml(content, linkResolver, htmlSerializer) }
                }
              });
            } else {
              setPageType('invalid-page');
            }
          }
        })
    }
  })
  //console.log('POST!!!!!!!!!!', post)
  return (
    <React.Fragment>
      {pageType === 'noticias_especiales' && post ?
        <SpecialNoticeContainer
          data={{ prismicNoticiasEspeciales: post, prismicDatosComunes: data.prismicDatosComunes, site: data.site }}
        />
        : ''}
      {pageType === 'noticias' && post ?
        <NormalNoticeContainer
          data={{ prismicNoticias: post, prismicDatosComunes: data.prismicDatosComunes, site: data.site }}
        />
        : ''}
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query previewQuery {
    prismicDatosComunes {
      data {
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }
  }
`

export default Preview;
