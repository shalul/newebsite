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
        <tr>
            <td>
            <img src ={contact} alt = 'about' width = {1000} height = {1000}></img>
            </td>
            <td>
        <div className='contact' id='connect'>
            <Container>
                <Row>
                    <h5>Contact Me</h5>
                    <form onSubmit={handleSubmit}/>
                    <Col sm = {6} className = "px-1">
                        
                        <form>
                            <Row>
                                <Col sm = {0} className = "px-1">
                                    <input type={"text"} value = {formDetails.firstName} placeholder="First Name" onChange ={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm = {6} className = "px-1">
                                    <input type={"text"} value = {formDetails.lastName} placeholder="Last Name" onChange ={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm = {6} className = "px-1">
                                    <input type={"email"} value = {formDetails.email} placeholder="Email Address" onChange ={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm = {6} className = "px-1">
                                    <input type={"telephone"} value = {formDetails.telephone} placeholder="Phone Number" onChange ={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row = "6" value = {formDetails.message} placeholder = "Message" onChange ={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type = "submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                            
                        </form>
                    </Col>
                </Row>
            </Container>
                    
                   
        </div>
        </td>
        </tr>
    )
}

export default Contact;