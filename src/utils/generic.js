import moment from "moment"
import "moment/locale/es"

const getDate = (date, locale = "es") => {
  moment.locale(locale)

  return moment(date).format("MMMM DD | YYYY");
}

const getAuthor = (author) => {
  const excludedTitles = ["Ilustración", "Verificado", "Edición"];

  const authorNames = author
    .filter(author => {
      if (!author.name || !author.name.text || author.name.text.trim() === "") {
        return false;
      }

      // Descomponemos el nombre del autor en partes basándonos en "|"
      const authorParts = author.name.text.split("|").map(part => part.trim());

      // Solo incluimos autores que no tienen un título excluido en su nombre
      return authorParts.length < 2 || !excludedTitles.includes(authorParts[1]);
    })
    .map(author => {
      const parts = author.name.text.split("|");
      return parts.length > 1 ? parts[0].trim() : author.name.text.trim();
    });

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