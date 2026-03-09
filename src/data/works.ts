export type Area = 'diseño' | 'ilustración' | 'proyectos'

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
    title: "Love the unloved",
    description: "Ilustración de bichos realizada a partir de dibujos resultantes del reto mensual 'Febugary'",
    area: "ilustración",
    image: "/images/bichos.jpg",
    images: [
      'bichos1',
      'bichos2'
    ]
  },
  {
    id: 2,
    title: "Quererte fue una fiesta",
    description: "Conjunto de ilustraciones para princesa",
    area: "ilustración",
    image: "/images/princesa.jpg",
    images: [
      'princesa1',
      'princesa2',
      'princesa3',
      'princesa4'
    ]
  },
  {
    id: 3,
    title: "Fanzine Home Video",
    description: "Fanzine sobre el álbum 'Home Video' de Lucy Dacus",
    area: "ilustración",
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
    id: 4,
    title: "Prints de ilustraciones",
    description: "Prints realizados a partir de ilustraciones personales",
    area: "ilustración",
    image: "/images/prints.jpg",
    images: [
      'prints3',
      'prints4',
      'prints5',
      'prints6',
      'prints1',
      'prints2',
      'nina1'
    ]
  },
  {
    id: 5,
    title: "Ilustración conceptual",
    description: "Ilustración conceptual y maquetación para un artículo de feminismo",
    area: "ilustración",
    image: "/images/conceptual.jpg",
    images: [
      'conceptual1',
      'conceptual2'
    ]
  },
  {
    id: 6,
    title: "In:soul",
    description: "Juego de mesa basado en la teoría de Carl Jung para tratar la salud mental",
    area: "proyectos",
    image: "/images/insoul.jpg",
    images: [
      'insoul1',
      'insoul2',
      'insoul3',
      'insoul4',
      'insoul5',
      'insoul6',
      'insoul7',
      'insoul8',
      'insoul9',
    ]
  },
  {
    id: 7,
    title: "Cartel 'Pereza' ",
    description: "Cartel para obra de teatro sobre los pecados capitales",
    area: "diseño",
    image: "/images/pereza.jpg",
    images: [
      'pereza1',
      'pereza2',
      'pereza3',
      'pereza4'
    ]
  },
  {
    id: 8,
    title: "Retratos virgen",
    description: "Serie de retratos artísticos inspirados en las virgenes católicas",
    area: "proyectos",
    image: "/images/retrato.jpg",
    images: [
      'retrato1',
      'retrato2',
      'retrato3',
      'retrato4',
      'retrato5',
      'retrato6',
    ]
  },
  {
    id: 9,
    title: "Ilustración Cien años de Soledad",
    description: "Reinterpretación ilustrada de la portada y páginas del libro 'Cien años de Soledad' de Gabriel García Marquez",
    area: "ilustración",
    image: "/images/cien.jpg",
    images: [
      'cien1',
      'cien2',
      'cien3',
      'cien4',
      'cien5',
      'cien6',
      'cien7',
      'cien8',
      'cien9',
    ]
  },
  {
    id: 10,
    title: "Odisea en el aeropuerto",
    description: "Cómic de dos páginas sobre una experiencia personal",
    area: "ilustración",
    image: "/images/comic.jpg",
    images: [
      'comic1',
      'comic2',
      'comic3'
    ]
  },
  {
    id: 11,
    title: "Sketchbook",
    description: "Páginas de mi sketchbook personal",
    area: "ilustración",
    image: "/images/sketch.jpg",
    images: [
      'sketch1',
      'sketch2',
      'sketch3',
      'sketch4',
      'sketch5',
      'sketch6',
      'sketch7',
      'sketch8',
      'sketch9',
      'sketch10'
    ]
  },
  {
    id: 12,
    title: "Posters de Boygenius",
    description: "Diseño de posters de la canción True Blue de la banda Boygenius",
    area: "diseño",
    image: "/images/boy.jpg",
    images: [
      'boy1',
      'boy2'
    ]
  }
]