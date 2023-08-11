import moment from "moment"
import "moment/locale/es"

const getDate = (date, locale = "es", format = "MMMM DD | YYYY") => {
  moment.locale(locale)
  return moment(date).format(format);
}

const getAuthor = (author, locale = "es") => {
  for (let i = 0; i < author.length; i++) {
    if (author[i].name && author[i].name.text) {
      // Tomamos solo la parte anterior al "|"
      const parts = author[i].name.text.split("|");
      const name = parts[0].trim();
      if (name !== "") {
        return name; // Retornamos el primer nombre válido encontrado
      }
    }
  }
  
  // Si no hay nombres válidos, devuelve "Anónimo" o "Anonymous" según el idioma
  return locale === "es" ? "Anónimo" : "Anonymous"
}

export {
  getDate, getAuthor
}
