import {CAMPSITES} from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};

//note LOWER-CASE "c" campsitesSlice.js: naming convention for files that will not export components //