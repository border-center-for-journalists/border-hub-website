import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript"

const Preview = ({ data: { site: { siteMetadata: { API_KEY, API_URL } } } }) => {
  // const [pageType, setPageType] = useState('');
  // const [postId, setPostId] = useState('');
  const [documentId, setDocumentId] = useState('');

  useEffect(() => {
    const qryString = window.location.search.slice(1);
    const qryStrParams = qryString.split('&');
    const strParams = qryStrParams.map(item => item.split('='));
    const [paramName, docId] = strParams.find(item => item[0] === 'documentId')
    const [paramToken, token] = strParams.find(item => item[0] === 'token')
    if (docId !== documentId) {
      console.log(docId);
      console.log(API_URL, API_KEY);
      Prismic.getApi(API_URL, { accessToken: API_KEY })
        .then(api =>
          // api.query(Prismic.Predicates.at("document.type", this.noticeType), {
          //   pageSize: 5,
          //   page: this.state.page,
          // })        	
          api.query(
            Prismic.Predicates.at('document.id', docId),
            { lang: '*', ref: token }
          )
        )
        .then(response => {
          if (response.results.length === 0) {
            // No data! D:
            // const rawData = response.results.length ? response.results[0] : {};
          } else {
            // Parse data :c
            const rawData = { ...response.results[0] };
            const {
              uid,
              id: prismicId,
              last_publication_date,
              type,
              data: {
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

            const alliances = rawAlliances.length === 0
              ? [{
                alliance_image: { url: '', alt: '' },
                alliance_url: { url: '' },
                alliance_name: { text: '' }
              }]
              : rawAlliances.map(({
                alliance_image = { url: '', alt: '' },
                alliance_url = { url: '' },
                alliance_name = { text: '' }
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
                    eje_y: [eje_y = { text: '' }]
                  }
                } = item;

                return {
                  ...item,
                  slice_type,
                  primary: {
                    ...item.primary,
                    chart_title,
                    axis_x,
                    eje_y
                  }
                }
              }

              return { ...item, slice_type };

            });

            console.log(response.results);

            return {
              uid,
              prismicId,
              last_publication_date,
              type,
              data: {
                title,
                metadescription,
                metakeywords,
                banner,
                author,
                alliances,
                body
              }
            };
          }
        })
    }
  })

  return (
    <div>
      <h1>Chido liro?</h1>
    </div>
  );
}

export const pageQuery = graphql`
  query previewQuery {
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
