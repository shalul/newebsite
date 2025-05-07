import{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contact from '../images/cntat.jpeg';
import './Footer.css';

function Contact (){
    const formInitial = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setForm] = useState(formInitial);
    const[buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        setForm({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = () =>{

    }
    return(
        <div className='contact' id='connect'>
    <Container>
        <Row>
            <h5>Interested? Contact Me</h5>
            <Col sm={12} className="px-1"> {/* Full width column for form */}
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </Col>
                        <Col sm={12} className="px-1">
                            <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                        </Col>
                        <button type="submit" className="contact-button">
                        <span>{buttonText}</span>
                        </button>

                        {status.message && (
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        )}
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
</div>

    )
}

export default Contact;