export type Area = 'diseño' | 'ilustración' | 'proyectos' | 'arte'

export interface Work {
  id: number
  title: string
  description: string
  area: Area
  image: string
}

export const works: Work[] = [
  {
    id: 1,
    title: "Fanzine Home Video",
    description: "Fanzine sobre el álbum 'Home Video' de Lucy Dacus",
    area: "arte",
    image: "/images/arte.jpg"
  },
  {
    id: 2,
    title: "Juntos Mejor",
    description: "Campaña para cerrar las brechas intergenercionales",
    area: "proyectos",
    image: "/images/juntos.jpg"
  },
  {
    id: 3,
    title: "Cartel 'Pereza' ",
    description: "Cartel para obra de teatro sobre los pecados capitales",
    area: "diseño",
    image: "/images/pereza.jpg"
  },
  {
    id: 4,
    title: "Insoul",
    description: "Juego de mesa basado en la teoría de Carl Jung para tratar la salud mental",
    area: "proyectos",
    image: "/images/insoul.jpg"
  },
  {
    id: 5,
    title: "Ilustración Cien años de Soledad",
    description: "Reinterpretación ilustrada de la portada y páginas del libro 'Cien años de Soledad' de Gabriel García Marquez",
    area: "ilustración",
    image: "/images/cien.jpg"
  },
  {
    id: 6,
    title: "Odisea en el aeropuerto",
    description: "Cómic de dos páginas sobre una experiencia personal",
    area: "ilustración",
    image: "/images/comic.jpg"
  },
  {
    id: 7,
    title: "Cartel CREFAD",
    description: "Cartel tipográfico para la CREFAD",
    area: "diseño",
    image: "/images/crefad.jpg"
  },
  {
    id: 8,
    title: "Sketchbook",
    description: "Páginas de mi sketchbook personal",
    area: "arte",
    image: "/images/sketchbook.jpg"
  },
  {
    id: 9,
    title: "Serie para princesa",
    description: "Conjunto de ilustraciones para mi perrita",
    area: "proyectos",
    image: "/images/princesa.jpg"
  },
  {
    id: 10,
    title: "Bichos",
    description: "Ilustraciones de bichos extraidas del reto mensual 'Febugary'",
    area: "proyectos",
    image: "/images/bichos.jpg"
  },
  {
    id: 11,
    title: "La niña que fui",
    description: "Proyecto personal",
    area: "arte",
    image: "/images/niña.jpg"
  },
  {
    id: 12,
    title: "Ilustración conceptual",
    description: "Ilustración sobre artículo de feminismo",
    area: "ilustración",
    image: "/images/conceptual.jpg"
  },
]