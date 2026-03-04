export type Area = 'diseño' | 'ilustración' | 'proyectos' | 'arte'

export interface Work {
  id: number
  title: string
  description: string
  area: Area
  image: string
  images: string[]
}

export const works: Work[] = [
  {
    id: 1,
    title: "Fanzine Home Video",
    description: "Fanzine sobre el álbum 'Home Video' de Lucy Dacus",
    area: "arte",
    image: "/images/fanzine.jpg",
    images: [
      'fanzine1',
      'fanzine2',
      'fanzine3',
      'fanzine4',
      'fanzine5',
      'fanzine6',
      'fanzine7',
      'fanzine8',
      'fanzine9',
      'fanzine10',
      'fanzine11'
    ]
  },
  {
    id: 3,
    title: "Cartel 'Pereza' ",
    description: "Cartel para obra de teatro sobre los pecados capitales",
    area: "diseño",
    image: "/images/pereza.jpg",
    images: [
      'pereza1',
      'pereza2',
    ]
  },
  {
    id: 4,
    title: "Insoul",
    description: "Juego de mesa basado en la teoría de Carl Jung para tratar la salud mental",
    area: "proyectos",
    image: "/images/insoul.jpg",
    images: [
      'insoul1',
      'insoul2',
      'insoul3',
      'insoul4',
      'insoul5',
    ]
  },
  {
    id: 2,
    title: "Juntos Mejor",
    description: "Campaña para cerrar las brechas intergenercionales",
    area: "proyectos",
    image: "/images/juntos.jpg",
    images: [
      'juntos1',
      'juntos1',
      'juntos1',
      'juntos1',
      'juntos1',
    ]
  },
  {
    id: 5,
    title: "Ilustración Cien años de Soledad",
    description: "Reinterpretación ilustrada de la portada y páginas del libro 'Cien años de Soledad' de Gabriel García Marquez",
    area: "ilustración",
    image: "/images/cien.jpg",
    images: [
      'cien1',
      'cien2',
      'cien3'
    ]
  },
  {
    id: 6,
    title: "Odisea en el aeropuerto",
    description: "Cómic de dos páginas sobre una experiencia personal",
    area: "ilustración",
    image: "/images/comic.jpg",
    images: [
      'comic1',
      'comic1',
      'comic1',
      'comic1',
    ]
  },
  {
    id: 7,
    title: "Cartel CREFAD",
    description: "Cartel tipográfico para la CREFAD",
    area: "diseño",
    image: "/images/crefad.jpg",
    images: [
      'crefad1',
      'crefad2'
    ]
  },
  {
    id: 8,
    title: "Sketchbook",
    description: "Páginas de mi sketchbook personal",
    area: "arte",
    image: "/images/sketch.jpg",
    images: []
  },
  {
    id: 9,
    title: "Serie para princesa",
    description: "Conjunto de ilustraciones para mi perrita",
    area: "proyectos",
    image: "/images/princesa.jpg",
    images: []
  },
  {
    id: 10,
    title: "Bichos",
    description: "Ilustraciones de bichos extraidas del reto mensual 'Febugary'",
    area: "proyectos",
    image: "/images/bichos.jpg",
    images: []
  },
  {
    id: 11,
    title: "La niña que fui",
    description: "Proyecto personal",
    area: "arte",
    image: "/images/nina.jpg",
    images: []
  },
  {
    id: 12,
    title: "Ilustración conceptual",
    description: "Ilustración sobre artículo de feminismo",
    area: "ilustración",
    image: "/images/conceptual.jpg",
    images: []
  },
]