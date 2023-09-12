import { Container, Row, Col } from 'react-bootstrap';
import { BsShop } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Toko = () => {
    const [dataToko, setDataToko] = useState([]);
    const [error, setError] = useState(null); // State untuk menangani kesalahan

    useEffect(() => {
        axios.get('https://4405-114-5-244-134.ngrok-free.app/all_data_toko')
            .then((response) => {
                console.log('ini data toko', response.data);
                setDataToko(response.data);
            })
            .catch((error) => {
                setError(error); // Tangani kesalahan dan simpan di state error
                console.error('Terjadi kesalahan:', error);
            });
    }, []);

    if (error) {
        // Tampilkan pesan kesalahan jika terjadi error
        return (
            <div className="toko">
                <Container>
                    <div className="header__toko__content">
                        <BsShop className='ikon__header__toko' size={100} />
                        <h1 className='text-center fw-bold ms-3'>Informasi Toko</h1>
                    </div>
                    <p className="text-danger text-center">Terjadi kesalahan: {error.message}</p>
                </Container>
            </div>
        );
    }

    return (
        <div className="toko">
            <Container>
                <div className="header__toko__content">
                    <BsShop className='ikon__header__toko' size={100} />
                    <h1 className='text-center fw-bold ms-3'>Informasi Toko</h1>
                </div>
                <Row>
                    {dataToko.map((toko) => {
                        return <Col key={toko.id} className='shadow'>
                            <img src={toko.img} className='w-100 rounded-top'></img>
                            <h5 className='mb-5'>{toko.nama_toko}</h5>
                            <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                                <p className='m-0 text-primary fw-bold'>{toko.nama_pemilik_toko}</p>
                            </div>

                            {/* id_toko: 4,
                            nama_pemilik_toko: 'Aditya pamungkas',
                            nama_toko: 'Adit Cell',
                            created_at: 2023-09-09T22:13:49.000Z */}
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Toko;
