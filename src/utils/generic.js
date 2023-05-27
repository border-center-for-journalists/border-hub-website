import moment from "moment"
import "moment/locale/es"
moment.locale("es")

const getDate = (date) => {
  return moment(date).format("MMMM DD | YYYY");
}

const getAuthor = (author) => {
  const authorNames = author
      .filter(author => author.name && author.name.text !== "")
      .map(author => author.name.text)

  if (authorNames.length > 0) {
    const names =  authorNames.join(', ');

    if (names === "") {
      return "Anónimo"
    }

    return names;
  }

  return "Anónimo"
}

export {
  getDate, getAuthor
}