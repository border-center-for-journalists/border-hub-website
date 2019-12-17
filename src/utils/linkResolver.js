module.exports = function linkResolver(doc) {
  console.log(doc);
  if (doc) {
    if (doc.type === 'noticias') {
      return `/noticias/${doc.uid}`;
    } else if (doc.type === 'noticias_especiales') {
      return `/noticias-especiales/${doc.uid}`;
    } else if (doc.type === 'noticias-especiales') {
      return `/noticias_especiales/${doc.uid}`;
    }
    return `${doc.type}`;
  }

  return '/';
}
