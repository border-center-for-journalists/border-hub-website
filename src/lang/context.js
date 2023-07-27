import React from "react"

export const ES = {
  locale: "es",
  donate: {
    fund: 'Apoya al periodismo'
  },
  subscribe: {
    subscribe_and_receive_news: 'Suscríbete y recibe noticias al momento',
    name: 'Nombre',
    last_name: 'Apellido',
    email: 'Correo',
    submit: 'Enviar'
  },
  news: {
    by: 'Por',
    recent_news: 'Notas Recientes',
    incidences: 'Incidencias',
    specials: 'Especiales',
    see_all: 'Ver todas',
  }
}

export const EN = {
  locale: "en",
  donate: {
    fund: 'Support journalism'
  },
  subscribe: {
    subscribe_and_receive_news: 'Subscribe and receive instant updates',
    name: 'First Name',
    last_name: 'Last Name',
    email: 'E-Mail',
    submit: 'Submit'
  },
  news: {
    by: 'By',
    recent_news: 'Recent News',
    incidences: 'Incidences',
    specials: 'Specials',
    see_all: 'See all',
  }
}

export const Context = React.createContext(ES)