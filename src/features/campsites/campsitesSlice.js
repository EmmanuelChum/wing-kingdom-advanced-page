import {CAMPSITES} from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};

//note LOWER-CASE "c" campsitesSlice.js: naming convention for files that will not export components //