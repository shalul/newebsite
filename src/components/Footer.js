import{useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import emailjs from 'emailjs-com';

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

    const formRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.send('service_sy8ncuv','template_l1nymee',{
            name: formDetails.firstName,
            from_name: formDetails.firstName,
            from_last: formDetails.lastName,
            phone: formDetails.phone,
            message: formDetails.message,
            reply_to: formDetails.email,
        }, 'ikTlwjrZgq1vy6xxL').then((result) => {
            console.log('Email to you sent:', result.text);
            emailjs.send(
                'service_sy8ncuv', 
                'template_1ulkspn', 
                {email:formDetails.email}, 
                'ikTlwjrZgq1vy6xxL').then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setButtonText("Sent!");
                    setForm(formInitial);
                },(error) => {
                    console.log('FAILED...', error);
                    setButtonText("Error, try again later!");
                },
            );
        });
    }

    return(
        <div className='contact' id='connect'>
    <Container>
        <Row>
            <h5>get in touch :)</h5>
            <Col sm={12} className="px-1"> {/* Full width column for form */}
                <form ref={formRef} onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6} className="px-1">
                            <input type="text" name="from_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="text" name="from_last" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="email" name="reply_to" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </Col>
                        <Col sm={12} className="px-1">
                            <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
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