import { Container, Row, Col, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Produk = () => {
  let navigate = useNavigate()
  const [dataProduk, setDataProduk] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State untuk input pencarian
  const [searchResults, setSearchResults] = useState([]); // State untuk hasil pencarian


  const getProduct = (item) => {
    const id = item.id
    const slug = item.nama_produk.toLowerCase().replace(/\s+/g, '-');
    navigate(`/detail-produk/${slug}`, { state: { product: item, id } });
  }


  useEffect(() => {
    axios.get('https://4405-114-5-244-134.ngrok-free.app/all_data_produk')
      .then((response) => {
        setDataProduk(response.data);
      })
      .catch((error) => {
        setError(error);
        console.error('Terjadi kesalahan:', error);
      });
  }, []);
  // useEffect(() => {
  //   const userData = {
  //     nohp: 6283138112056,
  //     pesan: `Halo, berikut kode konfirmasi anda,\n \n 👉  \n \n terimakasih 😁`,
  //     otp: 2536
  //   };
  //   console.log(userData);
  //   axios.post('http://localhost:9000/apiwhatsapp', userData)
  //   .then((response) => {
  //     console.log('Sukses menjalankan data', response.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //     console.log("Terjadi kesalahan saat mengirim OTP: " + error.message, "Error");
  //   });    
  // }, []);

  useEffect(() => {
    // Fungsi untuk melakukan pencarian
    const performSearch = () => {
      const filteredData = dataProduk.filter((produk) =>
        produk.nama_produk.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredData);
    };

    performSearch(); // Panggil fungsi pencarian saat searchTerm berubah
  }, [searchTerm, dataProduk]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm saat input berubah
  };

  if (error) {
    return (
      <div className="produk">
        <Container>
          <p className="text-danger text-center">Terjadi kesalahan: {error.message}</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="produk">
      <Container>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Cari Produk"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {searchResults.map((produk) => (
            <Col key={produk.id}>
              <div className="card h-100 shadow">
                <img src='data:image/jpeg;base64,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' className="card-img-top" alt={produk.nama_produk} />
                <div className="card-body">
                  <h5 className="card-title">{produk.nama_produk}</h5>
                  <p className="card-text">Harga: {produk.harga_barang}</p>
                </div>
                <button onClick={() => getProduct(produk)} className='btn btn-danger rounded-1 mb-3'>Lihat Detail<i class="ms-3 fa-solid fa-chevron-right"></i></button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Produk;
