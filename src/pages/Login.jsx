import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="login__container">
      <h1 className="text-center">Masuk</h1>
      <Form>
        <Form.Group>
          <Form.Label>Nomor Whatsapp</Form.Label>
          <Form.Control id='no_wa' type="number" placeholder="Masukkan Nomor" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control id='password' type="password" placeholder="Password" />
        </Form.Group>

        <Button style={{ backgroundColor: '#DC3545' }} variant="primary" type="submit" className="w-100">
           Masuk
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
