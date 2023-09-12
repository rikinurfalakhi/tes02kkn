import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Registrasi = () => {

  const handleDaftar = () => {
    const namaPengguna = document.getElementById('nama_pengguna').value;
    const noWa = document.getElementById('no_wa').value;
    const alamat = document.getElementById('alamat').value;
    const password = document.getElementById('password').value;
    const kodeOtp = document.getElementById('kode_otp').value;
    if(!namaPengguna){
      alert('Mohon isi nama Pengguna')
    }
    if(!noWa){
      alert('Mohon isi nomor wa')
    }
    if(!alamat){
      alert('Mohon isi alamat')
    }
    if(!password){
      alert('Mohon isi password')
    }
    if(!kodeOtp){
      alert('Mohon isi kode otp')
    }
    console.log('Nama Pengguna:', namaPengguna);
    console.log('Nomor Whatsapp:', noWa);
    console.log('Alamat:', alamat);
    console.log('Password:', password);
    console.log('Kode OTP:', kodeOtp);
  }

  return (
    <Container className="registrasi__container">
      <h1 className="text-center">Registrasi</h1>
      <Form>
        <Form.Group>
          <Form.Label>Nama Pengguna</Form.Label>
          <Form.Control id='nama_pengguna' type="text" placeholder="Masukkan Nama" />
        </Form.Group>
        <Form.Group >
          <Form.Label>Nomor Whatsapp</Form.Label>
          <div className="d-flex">
            <Form.Control id='no_wa' type="number" placeholder="Masukkan Nomor" />
            <Button
              variant="secondary"
              className="ml-2"
              onClick={handleDaftar}
            >
              Kirim OTP
            </Button>
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat</Form.Label>
          <Form.Control id='alamat' type="text" placeholder="Masukkan Alamat" />
        </Form.Group>

        <Form.Group >
          <Form.Label>Password</Form.Label>
          <Form.Control id='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group >
          <Form.Label>Verifikasi Kode</Form.Label>
          <Form.Control id='kode_otp' type="number" placeholder="Kode Otp" />
        </Form.Group>

        <Button
          style={{ backgroundColor: '#DC3545' }}
          variant="primary"
          type="button"
          className="w-100"
          onClick={handleDaftar}
        >
          Daftar
        </Button>
      </Form>
    </Container>
  );
}

export default Registrasi;
