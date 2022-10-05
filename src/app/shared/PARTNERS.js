import bootStrapLogo from '../assets/img/bootstrap-logo.png';
import gitLogo from '../assets/img/git-logo.png';
import mongoLogo from '../assets/img/mongo-logo.png';
import nodeLogo from '../assets/img/node-logo.png';

export const PARTNERS = [
    {
        id: 0,
        name: 'Level 1',
        image: bootStrapLogo,
        featured: false,
        description:
            "Just a sweet kiss of heat, don't be a baby, even your grandma can handle it, wimp."
    },
    {
        id: 1,
        name: 'Level DOS',
        image: gitLogo,
        featured: false,
        description:
            "Okay, we'll admit, things are starting to heat up, no big deal, but a real man can still handle it, this ain't nothin but a chicken wang."
    },
    {
        id: 2,
        name: 'Level III',
        image: mongoLogo,
        featured: true,
        description:
            "I'm not crying, are you crying?  We understand if you want to throw in that towel now, we won't judge you.  But your family and friends might, and your crush who's secretly sitting in the background.  Hehe no pressure."
    },
    {
        id: 3,
        name: 'Level FIVE Alarm!!!',
        image: nodeLogo,
        featured: false,
        description:
            "Yeah... we went ahead and just skipped to 5, anything lower wouldn't do this flavor justice.  We're not calling you insane for doing this, but you're pretty much insane.  It's not that we don't believe in you but, just to be safe ...SIGN THAT WAIVER!!!"
    }
];
