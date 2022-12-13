import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <Form id="contact-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="send me a message!"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;