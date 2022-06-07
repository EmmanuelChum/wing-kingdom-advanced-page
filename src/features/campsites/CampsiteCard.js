import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({campsite}) => { //we used destructing here//
    const {image, name} = campsite; //we used destructing here//
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}// destructuring//
                alt={name} // destructuring//
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
        //destructuring//
    );
}

export default CampsiteCard;