import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                        Our food is always of the highest quality. We are the original  chicken wing experts, and everything we do celebrates our passion for serving delicious, affordable, good food. Whether it is a spin on our world-famous iconic recipes, innovative ways to serve chicken wings, or new menu items inspired by our original roots, everything we make must be uniquely Wing Kingdom. We are proud to serve wholesome, abundant, hot meals the way they should be served—made with high-quality fresh chicken, freshly prepared by real cooks in our kitchens. We want to welcome you to our family, and we promise you will feel right at home.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Our Story...</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 14, 1987</dd>
                                <dt className='col-6'>No. of Stores in 2022</dt>
                                <dd className='col-6'>777</dd>
                                <dt className='col-6'>No. of Customers served in 2022</dt>
                                <dd className='col-6'>1,000,000,000+</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>25,000</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                    If you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for a lifetime, if you give a man directions to your nearest Wing Kingdom, he will eat like a king, and he will probably be a lot more greatful.  Who eats fish anyways?
                                </p>
                                <footer className='blockquote-footer'>
                                    Confucius probably,{' '}
                                    <cite title='Source Title'>
                                        "The Art of Yum" - Wing Kingdom,
                                        400 BCE
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>You can't handle the HEAT!!!</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    )
}

export default AboutPage;