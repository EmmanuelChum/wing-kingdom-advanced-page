import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';

export const CAMPSITES = [
    {
        id: 0,
        name: 'The Highest Quality Organic, Free-Range Chicken Wings in Town!!!',
        image: reactLakeImg,
        elevation: 1233,
        featured: false,
        description:
            'Quality matters, and at Wing Kingdom, we source our delicious Chickens from local farms, that breed Free-Range, Organic Chickens, Cockadoodle YUM!!!'
    },
    {
        id: 1,
        name: 'Relaxing Setting and Atmosphere!!!',
        image: chromeRiverImg,
        elevation: 877,
        featured: false,
        description:
            'Ambiance matters, when you are out on the town, you want to relax and just have a good time.  Leave the worries or work and stress at the door, find your peace at any of our state of the art locations, equipped with controlled lighting, industrial air-conditioning during the hot & summer, and a cozy warm fireplace during cold & winter months, you will feel right at home!'
    },
    {
        id: 2,
        name: 'Incredible Beer Selection!!!',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Our Beer Selection is second to none, from domestic to imports, we just want to make sure your thirst is quenched, we will even drive you home ourselves (premium upcharge for uber services).'
    },
    {
        id: 3,
        name: 'Arcade and Fun for the Whole Family!!!',
        image: reduxWoodsImg,
        elevation: 42,
        featured: true,
        description:
            "Bring your kids, or bring out the kid in you!  With our state of the art arcade, with our massive collection, we entertainment fun for the whole gang!!!"
    }
];
