import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        1 Chicken Wing Blvd
                        <br />
                        Richmond, VA 23228
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+18045551234'
                    >
                        <i className='fa fa-phone' /> 1-804-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> wingkingdom@gmail.com
                    </a>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
