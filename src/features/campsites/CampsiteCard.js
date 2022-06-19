import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => { //we used destructing here//
    const { id, image, name } = campsite; //we used destructing here//
    return (
        <Link to={`${id}`}>
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
        </Link>
        //destructuring//
    );
}

export default CampsiteCard;