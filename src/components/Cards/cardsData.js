import destinoImg from '../../assets/viajeros2.jpg';
import actividadImg from '../../assets/experiencias.jpg';
import experienciasImg from '../../assets/destinos.jpg';
const cardsData = [
    {
        id:1,
        title: "Destinos",
    description: "Encuentra los rincones más increíbles del mundo.",
    text: "Planifica tu viaje perfecto con guías detalladas y ofertas exclusivas para descubrir nuevos horizontes.",
        image: destinoImg,
        link: "/destinos"
    },
    {
        id:2,
       title: "Actividades",
    description: "Vive experiencias inolvidables y emocionantes.",
    text: "Súmate a propuestas únicas y emocionantes que transformarán tus vacaciones en una gran aventura.",
        image: actividadImg,
        link: "/actividades"
    },
    {
        id:3,
        title: "Experiencias",
        description: "Conecta con la esencia local de cada destino.",
        text: "Explora culturas vibrantes y tradiciones auténticas para crear recuerdos profundos que perdurarán.",
        image: experienciasImg,
        link: "/experiencias"
    }
];

export default cardsData;