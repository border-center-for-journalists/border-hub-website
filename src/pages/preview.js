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
          // if (response.results.length === 0) {
          //   // No data! D:
          //   // const rawData = response.results.length ? response.results[0] : {};
          // } else {
          //   // Parse data :c
          //   const rawData = { ...response.results[0].data, noticeType: response.results[0].type };
          // }

          console.log(response.results);

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
