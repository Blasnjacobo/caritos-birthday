
// Types for the data structure
export interface Person {
  name: string;
  videoUrl: string;
  sentence: string;
  poster: string;
  gender: 'male' | 'female' | 'both';
}

interface CategoryData {
  [key: string]: Person[];
}

export const data: CategoryData = {
  "familia": [
    {
      name: "Mamá y Papá",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/papas/papas__video.mp4",
      sentence: "Tus personas favoritas en el mundo mundial",
      poster: "",
      gender: "both"
    },
    {
      name: "Ale & Claudio",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/ale&Claudio/Ale&Claudio__video.MP4",
      sentence: "Hermana y Cuñado, nueva familia de Blasito, buenas personas.",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/ale%26Claudio/Ale%26Claudio__foto.jpg",
      gender: "both"
    },
    {
      name: "Familia de Tia Marbey",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/familiaMarbey/FamiliaMarbey__video.mp4",
      sentence: "Tanto tú como tus papás quieren mucho mucho a esta bonita familia",
      poster: "",
      gender: "both"
    },
    {
      name: "Tia Carmen, tio Felipe & Natalia",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/tiosCarmenFelipe&Natalia/TiosCarmenFelipe&Natalia__video.mp4",
      sentence: "Pero queeeee bonita familia y video, no los conozco pero me dieron ganas de conocerlos y cantar con el piano.",
      poster: "",
      gender: "both"
    },
    {
      name: "Primo Miguel Ángel",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/primoMiguelAngel/primoMiguelAngel__video.mp4",
      sentence: "Desde aqui se nota que te quiere mucho tu primo <3",
      poster: "",
      gender: "male"
    },
    {
      name: "Prima Sofia",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/Sofia/sofia__video.mp4",
      sentence: "Hija de tia Marbey, espero conocerlos pronto",
      poster: "",
      gender: "female"
    },
    {
      name: "Claudio",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/Claudio/Claudio__video.mp4",
      sentence: "Hija de tia Marbey, espero conocerlos pronto",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/ale%26Claudio/Ale%26Claudio__foto.jpg",
      gender: "male"
    },
  ],
  "Amigos": [
    {
      name: "Ruby",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/ruby/ruby__video.mp4",
      sentence: "Cuyita, que cuentas con dos niñas que parecen sus sobrinas, muy buen ser humano.",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/ruby/ruby__foto.jpg?raw=true",
      gender: "female"
    },
    {
      name: "Diana",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/diana/diana__video.mp4",
      sentence: "Cuya, mi comadre, muy buena gente aunque no la he conocido, quiere mucho a carito.",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/diana/diana__foto.jpg?raw=true",
      gender: "female"
    },
    {
      name: "Karla",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/karla/karla__video.mp4",
      sentence: "Cuya, amiga de carito, y buena persona, buenas vibras.",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/karla/karla__foto.jpg?raw=true",
      gender: "female"
    },
    {
      name: "Atenas",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/atenas/atenas__video.MP4",
      sentence: "Cuya, platicadora, buena gente con carito",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/atenas/atenas__foto.jpg",
      gender: "female"
    },
    {
      name: "Anahí",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/anahi/Anahi__video.MP4",
      sentence: "Cuya, emprendedora, y hay bodorrio en diciembre",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/anahi/anahi__foto.jpg",
      gender: "female"
    },
    {
      name: "Geovani",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/geovani/geovani__video.mp4",
      sentence: "Cuyita Influencer, se tiene mucho amor mutuo, de las mejores amigas",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/geovani/geovani__foto.jpg",
      gender: "female"
    },
    {
      name: "Daniela",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/daniela/Daniela__video.mp4",
      sentence: "Amiga carito Mexico, coleccionistas de 1Ds",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/daniela/daniela__foto.jpg",
      gender: "female"
    },
    {
      name: "Patty",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/patty/Patty__video.mp4",
      sentence: "Real y Beffa gringa, ama a caro y caro ama a Patty",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/patty/patty__foto.jpg?raw=true",
      gender: "female"
    },
    {
      name: "Bryan",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/Bryan/Bryan__video.mp4",
      sentence: "Real, y Esposo de Beffa gringa, no los conozco pero espero que llegue la fecha para conocerlos",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/Bryan/Bryan__foto.jpg?raw=true",
      gender: "male"
    },
    {
      name: "Renne",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/renne/renne__video.mp4",
      sentence: "Real, Beffo mayor de Carito, buen sujeto",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/renne/rene__foto.jpg?raw=true",
      gender: "male"
    },
    {
      name: "Vicky",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/Vicky/vicky__video.mp4",
      sentence: "Real, de las reales que mas mencionas, buena gente",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/Vicky/Vicky__Foto.jpg?raw=true",
      gender: "female"
    },
    {
      name: "Karen",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/karen/Karen__video.mp4",
      sentence: "Real, se ve que quiere mucho a carito, y es mutuo",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/karen/karen__foto.jpg?raw=true",
      gender: "female"
    },
    {
      name: "Naila & Marco",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/Naila&Marco/Naila&Mayco__video.mp4",
      sentence: "Pareja real, cotorros y hacen bonita pareja, quieren a carito.",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/Naila&Marco/Naila&Marco__foto.jpg?raw=true",
      gender: "both"
    },
    {
      name: "Gerardo",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/gerardo/gerardo__video.mp4",
      sentence: "Amigo uni, este compilla es re buena gente.",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/gerardo/gerardo__foto.jpg",
      gender: "male"
    },
    {
      name: "Angie",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/angie/Angie__video.mp4",
      sentence: "Amiga leal que es de los reales, excelente para mi carito",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/angie/Angie__foto.jpg",
      gender: "female"
    },
    {
      name: "Elda",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/elda/Elda__video.mp4",
      sentence: "Amiga carito, carito la ha mencionado y siempre con comentarios positivos",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/elda/Elda__foto.jpg",
      gender: "female"
    },
    {
      name: "Lorena",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/lorena/Lorena__video.mp4",
      sentence: "Amiga carito, se ve buena gente y que quiere a carito.",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/lorena/Lorena__foto.jpg",
      gender: "female"
    },
    {
      name: "Paulina",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/paulina/Paulina__video.mp4",
      sentence: "Amiga carito, habla como colombiana y se ve pana.",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/paulina/paulina__foto.jpg",
      gender: "female"
    },
    {
      name: "Nancy",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/nancy/nancy__video.MOV",
      sentence: "Beffa carito, talentosa y que carito admira mucho",
      poster: "https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/felicitaciones/nancy/nancy__foto.jpg?raw=true",
      gender: "female"
    }
  ],
  "familia Blas": [
    {
      name: "Señora Sandra",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/senoraSandra/senoraSandra__video.mp4",
      sentence: "Suegra, buena gente con Carito",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/senoraSandra/senoraSandra__foto.jpg",
      gender: "female"
    },
    {
      name: "Rosally",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/rosally/Rosally__video.mp4",
      sentence: "Cuñada, gemela de Blasito, y amiga de carito antes de que conociera a Blas",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/rosally/rosally__foto.jpg",
      gender: "female"
    },
    {
      name: "Alexa&Cristal&Mayco",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/alexa&Cristal&Mayco/Alexa&Cristal&Mayco__video.mp4",
      sentence: "Sobrina hermosa, preciosa, i love you, si ves esto Alexa, vales mil, junto con Cristal y Mayco que ya te agarraron mucho cariño.",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/alexa/alexa__foto.jpg",
      gender: "both"
    },
    {
      name: "Doña Rosita",
      videoUrl: "https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/felicitaciones/donaRosita/donaRosita__video.mp4",
      sentence: "Abuelita Blas, vio que andaban sacando videos para carito y quizo participar.",
      poster: "https://raw.githubusercontent.com/Blasnjacobo/loteria-personalizada/refs/heads/main/src/data/felicitaciones/donaRosita/donaRosita__foto.jpg",
      gender: "female"
    },

  ],
};