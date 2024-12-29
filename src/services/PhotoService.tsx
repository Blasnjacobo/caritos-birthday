// types/gallery.ts
export interface ImageItem {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
    category?: string;
    date?: string;
}

export interface CategoryGallery {
    category: string;
    title: string;
    description: string;
    images: ImageItem[];
}


export const PhotoService = {
    getData(): CategoryGallery[] {
        return [
            {
                category: 'origins',
                title: 'Origenes de nuestra relación',
                description: 'Origenes de nuestra relación, cuando empezamos a salir, cuando vivia en Culiacan, que momentos <3',
                images: [
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/blasito-carito-cita-f1.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/blasito-carito-cita-f1.jpg?raw=true',
                        alt: 'Una de las primeras citas que tuvimos en las que fuimos a ver a Lando ganar su primera carrera!, tengo que confesar que estaba nerviso.',
                        title: 'Cita F1'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-are-you-f-kidding-me.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-are-you-f-kidding-me.jpg?raw=true',
                        alt: 'NO TIENES IDEA DE LO QUE ME GUSTA VER que usas mi sueter favortio, te veias TAAAAAN HERMOSA!!!',
                        title: 'Sueter favortio'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-bebe.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-bebe.jpg?raw=true',
                        alt: 'Una de tus fotos favoritas, eras una niña muy bonita, pero sigues estando igualita mi niña hermosa.',
                        title: 'Carito bebé'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blas-boca-fotoshop.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blas-boca-fotoshop.jpg?raw=true',
                        alt: 'Ets afoto me da mucha risa porque necesitaste editarla porque me veia chimuelo, por que me veia así? quien sabe, pero el fotoshop no lo mejoró he he he',
                        title: 'Fotoshop'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-cine.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-cine.jpg?raw=true',
                        alt: 'Una de las citas que mas teniamos y disfrutabamos era ir al cine, estar en la salita VIP acostaditos viendo una linda pelicula, lo extraño como no tienes idea.',
                        title: 'Cine'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-cumpleanos-rene.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-cumpleanos-rene.jpg?raw=true',
                        alt: "Esta foto tiene un no se que que me encanta, recuerdo que pasamos un bonito dia con tus amigos en la casa de René, quisiera pasar mas dias así, estabas nerviosa de que conociera en plan de fiesta a tus amigos",
                        title: 'Fotito en casa de René'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-guapos-cena-reales.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-guapos-cena-reales.jpg?raw=true',
                        alt: 'Otra bonita foto en nuestras primeras salidas como noviecitos en la que me presentaste a algunos de tus amigos reales, en si, la foto 10 de 10.',
                        title: 'Otro cumpleaños de una Real'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-primer-mesesaurio.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-primer-mesesaurio.jpg?raw=true',
                        alt: 'Te veias H-E-R-M-O-S-A, tuvimos una linda sesion en el viston de montebello, en nuestro primer mes',
                        title: 'Caprichito Montebello, primer mesesaurio'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-primeras-fotos%20juntos.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-blasito-primeras-fotos%20juntos.jpg?raw=tru',
                        alt: 'Tuvimos como mil ocho mil salidas en un mes, creo que una vez sacamos la cuenta y fueron 18 citas en un mes, una de ellas fue esta salida a tomas bubble tea, bonito dia ese dia, cada salida me enamoraba mas y me dolia dejarte en tu casa.',
                        title: 'Bubble Tea'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-bubble-tea-oso.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-bubble-tea-oso.jpg?raw=true',
                        alt: 'Cada salida era enamorarme mas y mas, agradezco a dios que aprovechamos salir mucho antes de que empezaramos nuestra relación a distancia.',
                        title: 'Otra foto al ir al Bubble tea'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-cita-parque87.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-cita-parque87.jpg?raw=true',
                        alt: 'Otra de las primeras salidas fue cuando fuimos al parque 87 y caminamos por el laguito que tiene, tomamos fotitos, tambien cafecito y tuvimos una linda vista al atardecer, te queria tomas mil y un fotos ese dia.',
                        title: 'Cafecito al parque 87'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-conociendo-su-familia.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-conociendo-su-familia.jpg?raw=true',
                        alt: 'No me refiero a tu familia nuclear, si no a la primera vez que conocia tus familaires, cante canciones con tus tios y pasamos una excelenteeeeee noche, creo que si causé buenas sensaciones con ellos bebe, agradecido con el de arriba',
                        title: 'Primera vez que conocia a tus familiares'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-dumplings.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-dumplings.jpg?raw=true',
                        alt: 'Rico, ricos dumpling que me preparaste, ademas, te veiaaaaaaaaaaaaaas hemosisisisisiisisisisisisiissma dios santo, cantamos, bailamos y armamos rompecabezas con tu familia.',
                        title: 'Me hiciste dumplinnnnnnngs'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-foto-hermosa.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-foto-hermosa.jpg?raw=true',
                        alt: 'Yo no estuve en esta foto, pero la quiero mostrar porque recuerdo que cuando lo vi supe que me gustabas mucho, te representa al 100%, hermosa.',
                        title: 'Foto angelical'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-lengua-afuera.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-lengua-afuera.jpg?raw=true',
                        alt: 'Entre las citas diarias que teniamos recuerdo que fuimos simplemente a comprar un capilco, por que? ya que siempre quisiste probarla, y yo queria verte, excusas para tener citas sobraban bebé',
                        title: 'Cita de capilco'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-playa-vino-novios.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-playa-vino-novios.jpg?raw=true',
                        alt: 'Desde hace varios dias ya estaba decidido en pedirte que fueras mi novia, pero no sabia como pedirtelo sin que se vea predecible, obviamente cuando estabamos en la playa sabia que te lo pediria, no sabes el sentimiento que me da en este momento en recordar lo bonito que sentia cuando regresabamos a Culiacan sabiendo que mi futuro ya lo tendria apartado junto a alguien el resto d emis dias',
                        title: 'Mi dia favorito como pareja: cuando te pedí que fueras mi novia'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-primeras-fotos-pa-mi.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-primeras-fotos-pa-mi.jpg?raw=true',
                        alt: 'Yo soy amante de ver tus fotos, de pedirte fotos, y de hacerte sentir bonita, y como no alagarte cuando siempre te ves radiate, incluso cuando pareces leoncita, bueno, creo que estoy bastante enamorado.',
                        title: 'Foto random que me mandabas y amaba'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-setup-playa.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-setup-playa.jpg?raw=true',
                        alt: 'NO TIENES IDEA de lobonito que sentia en ese momento al verte junto con el reflejo del sol, recien al haberte pedido que fueras mi novia, mis nervios estaban a tope, pero mi felicidad estaba en un punto máximo.',
                        title: 'Foto que nunca olvidaré'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-sexy-noviembre.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-sexy-noviembre.jpg?raw=true',
                        alt: 'Para este punto todavia no coincidiamos, pero teniamos nocien uno del otro, recuerdo que vi que estabas en una boda, el mismo dia que yo tambien estaba en una boda, pense que era la misma, puede ser que no te vi con ese vestido, pero me acostumbrare en verte toda bonita como lo estuviste ese dia.',
                        title: '5 de novimbre, antes de conocerno, ambos en una boda'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-y-jack-partido.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/carito-y-jack-partido.jpg?raw=true',
                        alt: 'No sabes lo que significa para una persona como yo que su nueva novia vaya a ver sus partidos de futbol, junto con mi perrito, para este punto y a pesar del poco tiempo ya queria entregarte el anillo.',
                        title: 'Cuando fuiste a ver mi primer partido'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/playa-carito-blasito-abrazados-novios.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/playa-carito-blasito-abrazados-novios.jpg?raw=true',
                        alt: 'Este dia fue absolutamente increible, se que ya hemos pasado por viajitos, pero este dia es inexplicable.',
                        title: 'Estoy seguro que esta foto será la que más marcado tienes del dia de cuando fuimos novios'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/primera-historia-con-carito.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/primera-historia-con-carito.jpg?raw=true',
                        alt: 'Recuerdo que esta fue la primera historia en donde mostre que estaba saliendo contigo, agarraditos de la mano con una hermosa señorita? asi es, de aqui en adelante Blasito es papa casada.',
                        title: 'Mi primera historia mostrando que salia con alguien'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/primera-vez-mama-carito.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/origins/primera-vez-mama-carito.jpg?raw=true',
                        alt: 'Esto sucedio nomas un dia despues de haberte pedido que fueras mi novia, conociste a mi madre ya que ese plan ya se tenia contemplado desde una semana antes, es por ello que creo que sabias que te pediria un dia antes, me da mucho gusto que tengas una bonita relación con ella y con toda la familia, eso es algo MUY importante para mi.',
                        title: 'Conociendo a mi mamá'
                    }
                ]
            },
            {
                category: 'distancia',
                title: '"A distancia"',
                description: 'No es idea, que despues de estar con tu novia un mes tengas que irte a otra ciudad y empezar a tener una relación a distancia, pero gracias a dios nos hemos podido ver seguido, y hemos sabido tratar esta distancia lo mas corto posible con mucha atención, respeto y amor.',
                images: [
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/alexa-blas-carito-jack-juntos.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/alexa-blas-carito-jack-juntos.jpg?raw=true',
                        alt: 'Que bonito es saber que en esta relación a distancia realmente no hay un tiempo prolongado sin vernos, todo fluye bien, y eso nos ha ayudado como pareja. El hecho que puedas venir a Mexico nos hace viajar un poquito y el que yo vaya a Culiacan hace que pueda pasar tiempo con tu familia y tu con la mía.',
                        title: 'Foto Alexa, Blasito, Carito y Jack'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/blasito-carito-coyoacan.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/blasito-carito-coyoacan.jpg?raw=true',
                        alt: 'Fotito en Coyoacan desayunando en un restaurante lindo, te veias hermosa. Tienes que confesar que eres mas chilanga que yo y que conoces mas estas tierras, lo siento, no quiero quejas.',
                        title: 'Coyoacan'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/blasito-carito-posada-trabajo.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/blasito-carito-posada-trabajo.jpg?raw=true',
                        alt: 'Desde el momento en el que supe que podia invitar a alguien a la posada del trabajo sabia que tenia que traerte a Mexico para presumirte con todo mundo, tienen que ver que la mujer hermosa, buena e inteligente que siemrpe menciono no es imaginaria, si existeeeeeeeeee. Y que bonito fue.',
                        title: 'Posada Trabajo'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/blasito-extrana-carito.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/blasito-extrana-carito.jpg?raw=true',
                        alt: 'Recuerdo bien esto, estabas triste porque saliste con tus papas y tu hermana con Claudio y queria que yo estuviera acompañandote ahí, asi que tuve que dibujarme agarradito de la mano contigo, no es lo mismo, pero que buena foto me quedó. Desventajas de estar en una relación a distancia, nimodo, tenemos que ser pacientes para en un futuro tener nuestra recompenza uno al otro.',
                        title: 'Fotito con carito Fake'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-blas-aeropuerto.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-blas-aeropuerto.jpg?raw=true',
                        alt: 'Simpre es un bonito sentimiento verte llegar en el aeropuerto sabiendo que llevamos semanas sin vernos y que por fin podre pasar unos dias con el amor de mi vida. Ese sentimiento es indescriptible y se que tu tambien siento de esa manera.',
                        title: 'Carito llegando al aeropuerto de MEXICO'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-blas-alistandose.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-blas-alistandose.jpg?raw=true',
                        alt: 'Nos vemos muy felices.',
                        title: 'La primera vez que viniste'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-blas-super-fodongos.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-blas-super-fodongos.jpg?raw=true',
                        alt: 'Es que etas fotos me dan mucho sentimiento y mas en los momentos en los que te extraño, nos vemos de lo mas casual pero muy contentos.',
                        title: 'Otra foto feliz fodonga'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-camara-guapa.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-camara-guapa.jpg?raw=true',
                        alt: 'Yo no tome esta foto, pero al mostrar esta foto quiero comentar que es muy importnate verte feliz haciendo actividades que te gustan a pesar de que yo no estoy viendote fisicamente haciendolo, me da mucha felicidad que puedas hacer lo que te haga feliz.',
                        title: 'Carito fotografa'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-celebra-galletas-marissa.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-celebra-galletas-marissa.jpg?raw=true',
                        alt: 'Esta foto viene de una vez que mi mamá te dio unas nenas de marissa, te pusiste tan feliz que empezaste a bailar, este tipo de llamas las cuales tenemos practicamente todos los dias son lo que hace que la distancia no se sienta tan lejos.',
                        title: 'Dates'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-cine-mexico-musical.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-cine-mexico-musical.jpg?raw=true',
                        alt: 'Como el ciner fue d enuestras citas favoritas cuando estabamos saliendo en Culiacan pues teniamos que traer esa cita a Mexico, y siempre disfrurare ir contigo mi amor.',
                        title: 'Cine en Mexico'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-dona.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-dona.jpg?raw=true',
                        alt: 'Me gusta mucho el plan de ir de mercadito en mercadito comprando cochineros y disfrutando de nuesra compañia. Asi sera siempre mi amorcito.',
                        title: 'Dona casi grande que tu caraaa'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-dormida.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-dormida.jpg?raw=true',
                        alt: 'Un poco cripy pero que beeeeella te veias durmiendo.',
                        title: 'Caro dormida'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-esfera-propuesta.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-esfera-propuesta.jpg?raw=true',
                        alt: 'Tuvimos la oportunidad de sentir poquito de la navida al ir a una mini villa navideña, en donde me pidieron que grabara como un sujeto le pedira casamiento a una señorita. No me lo esperaba pero ya tenemos una historia que contar.',
                        title: 'Navidad atmosphere en Mexico'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-fotografa.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-fotografa.jpg?raw=true',
                        alt: 'Amor, me gustaria que puedas formar parte de estos proyectos mas y mas, he visto como te hace muy feliz y te motiva mucho en seguir con tus proyectos, recuerda que eres una personita muy compometida y talentosa, asi que nunca te rindas en tus metas.',
                        title: 'Carito en pasarela'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-maleta-mexico.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-maleta-mexico.jpg?raw=true',
                        alt: 'Hemos tenido esa bendicion que hayas podido venir a Mexico mas de un par de veces, y eso vendra en aumento el año que venga, mira tu carita en esa foto, te ves toda contenta y hermosa.',
                        title: 'Carito contenta llegando a Mexico'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-maletas-culiacan.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-maletas-culiacan.jpg?raw=true',
                        alt: 'Todas estas imagenes vienen de diferentes momentos, es por ello que quiero recalcar que hemos podido vernos seguid a pesar d ela distancia, hay parejas que s even cada 6 meses e incluso mas, nosotro no soportamos pasar mas de mes y medio.',
                        title: 'Carito aeropuerto Culiacan'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-pastel-mi-cumpleanos.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-pastel-mi-cumpleanos.jpg?raw=true',
                        alt: 'Cuando haya un evento importnate o que yo considere que tenga mucha importancia para tu corazoncito pues estare ahí, puede que no sea ese mismo dia, pero siempre sera en un dia cercano, siempre daremos lo mejor para pasar esos lindos momentos juntos.',
                        title: 'Cumpleaños Blasito'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-perisur-navidad.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-perisur-navidad.jpg?raw=true',
                        alt: '',
                        title: 'Simplemente hermosa'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-polaroid.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-polaroid.jpg?raw=true',
                        alt: 'DFue la primera vez que viniste, fuimos a comer sushi, nos llovió mucho, y regresamos todos mojados. Despues te bañaste, te cambiaste y te veias muy contenta.',
                        title: 'Foto que me hizo muy feliz'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-pose-stranger-things.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-pose-stranger-things.jpg?raw=true',
                        alt: 'No soy el que mas serie ve, pero siempre he disfrutado ver series contigo, mas esa rachita en la que podiamos ver casi todos los dias Stranger Things y hacias esa pose rara de eleven.',
                        title: 'Stranger things'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-starbucks.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/carito-starbucks.jpg?raw=true',
                        alt: 'Es bonito que tambien tengas amigas aqui que te pueden acompañar cuando yo ande trabajando en Mexico, eso me hace sentir más tranquilo cada vez que vengas.',
                        title: 'Carito en Starbucks'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/expo-carito.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/expo-carito.jpg?raw=true',
                        alt: '',
                        title: 'Carito: Se feliz con la gente que quieres y haciendo lo que te gusta, se que es cuestion de tiempo para que consigas tus metas, vas en buen camino, y disfruta el trayecto, que sigues siendo muy jovencita.'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/jack-carriola.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/distancia/jack-carriola.jpg?raw=true',
                        alt: 'No hay razón especial para poner esta foto, pero mira su caritaaaaa.',
                        title: 'Foto del Jack'
                    }
                ]
            },
            {
                category: 'estacas',
                title: 'Las Estacas',
                description: 'Las estacas fue nuestra primer viaje juntitos mi amor, me da gusto que lo hayamos disfrutado mucho',
                images: [
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/blasito-carito-abrazados-padel-board.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/blasito-carito-abrazados-padel-board.jpg?raw=true',
                        alt: 'Recuerdas como conseguimos subir a ese board? corrimos como por 10 minutos sin parar porque ya iban a ser las 6 e iban a cerrar, y baia bia que estuvo lindo, fue muy bonita esa experiencia.',
                        title: 'Foto épica haciendo padding'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-blas-reu-estacas.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-blas-reu-estacas.jpg?raw=true',
                        alt: 'Bailamos, cantamos, reimos y dormimos a una hora razonable para poder salir temprano el dia siguiente y poder esta atiempo para tu vuelo, somos resposables claro que yes. Fue bonito que pude presentarte a algunos de mis amigos.',
                        title: 'Reu despues de las estacas'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-bolita-estacas.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-bolita-estacas.jpg?raw=true',
                        alt: 'Las estacas fue un bonito momento que tuvimos como pareja pero tambien para salir con mas personas, nos tocó un bonito grupo de gente que desde el principio s einteresó en que nos la pasaramos bien y que disfrutaramos de la bonita experiencia.',
                        title: 'Foto grupal'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-dormida-como-siempre.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-dormida-como-siempre.jpg?raw=true',
                        alt: 'DCarito se duerme en cualquier lado mientras sienta un carro en movimiento, aprendi esa lección cuando carito se subió al carro y en 5 segundos quedó dormidisima, te veias tan preciosa mi niña.',
                        title: 'Carito dormida en roadtrip'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-padding-estacas.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/estacas/carito-padding-estacas.jpg?raw=true',
                        alt: 'Etsa foto me da años de vida, estabas pasando una bonita experincia y yo estaba ahí viendote disfrutar. Eso a mi me encantó y es una de las mil razones que tengo para tener mas ganas de que salgamos a diferentes lugares a vacacionar.',
                        title: 'Carito con tu paddle board'
                    }
                ]
            },
            {
                category: 'glamping',
                title: 'Glamping',
                description: 'La mejor experiencia/lugar que hemos vivido sin lugar a dudas, muy bonito todo lo que vivimos.',
                images: [
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/blasito-carito-estrellas.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/blasito-carito-estrellas.jpg?raw=true',
                        alt: 'No hay descripcion romantica perfecta que yo pudiera dar para ese hermoso momento que estabamos viviendo, sin lugar a dudas nunca olvidaremos esa sensacion de enamorados en un escenario perfecto con la persona que amas.',
                        title: 'Glamping mientras vemos las estrellas'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/campamento-fogata.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/campamento-fogata.jpg?raw=true',
                        alt: 'Para una cita romantica mientras acampamos la fogata es un elemento encantador, mientras hacemos smores, comemos papas, tomamos vino tinto, hermoso todo, y tomando en cuenta que supimos administrar bien la madera para que la fogata nos durase mas de 2 horas! cracks',
                        title: 'Fogata'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-atardecer.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-atardecer.jpg?raw=true',
                        alt: 'Ahi se logra ver a una carit contanta y de fondo al nevado de Toluca, mientras tomabamos una bebida rara que no recuerdo su nombre, tomamos muchas fotito y nos quedamos con una muy bonita experiencia.',
                        title: 'Carito atardecer'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-blasito-amaca.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-blasito-amaca.jpg?raw=true',
                        alt: 'Yo se que he mencionado bastante lo bonito que la pasamos en ese lugar, pero esa tarde ne la que estabamos acostados en la amaca, relajados, abrando uno al otro, con un clima y vista perfecta es algo que quiero volver a vivir contigo.',
                        title: 'Amaca'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-blasito-atardecer.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-blasito-atardecer.jpg?raw=true',
                        alt: '',
                        title: 'Carito y Blasito felices'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-burbuja-campamento.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-burbuja-campamento.jpg?raw=true',
                        alt: 'PERO QUE HERMOSAAAAA MUJER, que bonita eres, mira esa carita, esa pose tan linda y ese vista, todo es perfecto en esa foto.',
                        title: 'Carito burbuja'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-camping.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-camping.jpg?raw=true',
                        alt: 'Un lugar que contaba con todo lo que necesitabamos, incluso supero nuestras expectativas.',
                        title: 'Caro con su glamping'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-disfrutando-domo.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-disfrutando-domo.jpg?raw=true',
                        alt: 'Esta foto es un screenshot de un video en donde les enseñaba a mi familia de todo lo que ofrecia el super domo, de fondo se contraba carito tomando el sol.',
                        title: 'Foto de glamping tour'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-navidad.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-navidad.jpg?raw=true',
                        alt: 'Esto no pasó exactamente durante el glampling pero fue un pre glamping, con ambiente navideño y tu toda preciosa, mirate, hermosaaaa!!!',
                        title: 'Carito Pino de navidad'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-recepcion-campamento.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-recepcion-campamento.jpg?raw=true',
                        alt: 'Cuando reciendo llegamos al glamping estabamos un poco preocupados porque habia un camino muy angosto en donde caminamos en medio de la nada como por un kilometro, de la nada nos encontramos con unas vacas, el cual me preocupo un poco, pero seguimos caminando y por fin nos encontramos con la entrada del glamping, esa carita que tienes esa una cara de alivio, que todo salio bien.',
                        title: 'Carito at Glampling'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-super-domo-letrero.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/carito-super-domo-letrero.jpg?raw=true',
                        alt: '',
                        title: 'Carito en el SUPER DOMOOOOOOO'
                    },
                    {
                        itemImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/desayuno-campamento.jpg?raw=true',
                        thumbnailImageSrc: 'https://github.com/Blasnjacobo/loteria-personalizada/blob/main/src/data/carito/glamping/desayuno-campamento.jpg?raw=true',
                        alt: 'Despues de haber pasado la noche en el domo, pasamos a desayunar en un lugar muy calido, rico y lindo, en donde pudimos tener una linda vista y pasar una mañana de novios en un lugar hermoso. En si, esa fue nuestra experiencia en el glamping.',
                        title: 'Desayuno Glamping'
                    }
                ]
            }
        ];
    },

    getGalleries() {
        return Promise.resolve(this.getData());
    }
};