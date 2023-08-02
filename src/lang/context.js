import React from "react"

export const ES = {
  seo: {
    title: 'Border Hub: Periodismo de Investigación de la Frontera Norte'
  },
  locale: "es",
  locale_zone: "es-mx",
  menu: {
    label: {
      EN: 'Inglés',
      ES: 'Español',
    },
    to: {
      EN: '/en/',
      ES: '/es/'
    }
  },
  donate: {
    fund: 'Apoya al periodismo',
    title: 'El periodismo requiere de tu apoyo',
    become_part_of_border: 'Conviértete en miembro del Border Hub',
    donate: 'Donar'
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
    contact_author: 'Contacta al Autor',
    credits: 'Créditos',
    special_investigations: 'Investigaciones Especiales',
    to_category: 'categoria',
    news: 'Noticias',
    recent_news: 'Notas Recientes',
    to_recent_news: 'noticias',
    incidences: 'Incidencias',
    to_incidence: 'incidencia',
    specials: 'Especiales',
    to_specials: 'noticias-especiales',
    see_all: 'Ver todas',
    loading: 'Cargando',
    all_results: 'Todas las noticias han sido cargadas',
    news_related: 'Notas Relacionadas',
    left: 'Izq.',
    alliances: 'Alianzas'
  },
  contact: {
    name: 'Nombre Completo',
    mail: 'Correo electrónico',
    message: 'Mensaje',
    address: 'Dirección',
    phone: 'Teléfono',
    submit: 'Enviar'
  }
}

export const EN = {
  seo: {
    title: 'Border Hub: Northern Border Investigative Journalism'
  },
  locale: "en",
  locale_zone: "en-us",
  menu: {
    label: {
      EN: 'English',
      ES: 'Spanish',
    },
    to: {
      EN: '/en/',
      ES: '/es/'
    }
  },
  donate: {
    fund: 'Support journalism',
    title: 'Journalism needs your support',
    become_part_of_border: 'Become a member of Border Hub',
    donate: 'Donate'
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
    contact_author: 'Contact Author',
    credits: 'Credits',
    special_investigations: 'Investigative Reporting',
    to_category: 'category',
    news: 'News',
    recent_news: 'Recent News',
    to_recent_news: 'news',
    incidences: 'Impact',
    to_incidence: 'impact',
    specials: 'Investigative Reporting',
    to_specials: 'investigative_reporting',
    see_all: 'See all',
    loading: 'Loading',
    all_results: 'All news have been loaded',
    news_related: 'Related News',
    left: 'Left',
    alliances: 'Alliances'
  },
  contact: {
    name: 'Full Name',
    mail: 'E-mail',
    message: 'Message',
    address: 'Address',
    phone: 'Phone',
    submit: 'Submit'
  }
}

export const Context = React.createContext(ES)