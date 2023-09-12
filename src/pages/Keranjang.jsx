  import React, { useState, useEffect } from 'react';
  import { Container, Row, Col, Table, Button ,Modal } from 'react-bootstrap';
  import axios from 'axios';

  const Keranjang = () => {
    const [dataKeranjang, setDataKeranjang] = useState([]);
    const [itemDipilih, setItemDipilih] = useState([]); // State untuk melacak item yang dipilih
    const [isLoading, setIsLoading] = useState(true); // State untuk melacak status loading
    const [totalHarga, setTotalHarga] = useState(0); // State untuk melacak total harga
    const [isItemDipilih, setIsItemDipilih] = useState(false); // State untuk melacak apakah item sudah dipilih atau belum

    
    const toggleItemPilihan = (itemId) => {
      if (itemDipilih.includes(itemId)) {
        setItemDipilih(itemDipilih.filter((id) => id !== itemId));
        setIsItemDipilih(false);
      } else {
        setItemDipilih([...itemDipilih, itemId]);
        setIsItemDipilih(true);
      }
    };
    const handleDeleteItem = (itemId) => {
      axios
        // .delete(`http://localhost:9000/delete_data_keranjang/${itemId}`)
        .delete(`https://4405-114-5-244-134.ngrok-free.app/delete_data_keranjang/${itemId}`)
        .then((response) => {
          // Item berhasil dihapus, refresh data keranjang
          console.log(response, 'hapus keranjang');
          refreshDataKeranjang();
          window.location.reload();
        })
        .catch((error) => {
          console.error('Gagal menghapus item:', error);
        });
    };

    const refreshDataKeranjang = () => {
      const id_user_keranjang = 1234;
      setIsLoading(true); // Menetapkan status loading menjadi true saat memuat data
      // axios.get(`http://localhost:9000/get_all_data_keranjang/${id_user_keranjang}`)
      axios.get(`https://4405-114-5-244-134.ngrok-free.app/get_all_data_keranjang/${id_user_keranjang}`)
        .then((response) => {
          console.log('Data keranjang:', response.data);
          setDataKeranjang(response.data);
          setIsLoading(false); // Menetapkan status loading menjadi false ketika data sudah dimuat
        })
        .catch((error) => {
          console.error('Gagal mengambil data keranjang:', error);
          setIsLoading(false); // Menetapkan status loading menjadi false jika terjadi error
        });
    };

    useEffect(() => {
      const id_user_keranjang = 1234;
      // axios.get(`http://localhost:9000/get_all_data_keranjang/${id_user_keranjang}`)
      axios.get(`https://4405-114-5-244-134.ngrok-free.app/get_all_data_keranjang/${id_user_keranjang}`)
        .then((response) => {
          console.log('Data keranjang:', response.data);
          setDataKeranjang(response.data);
          setIsLoading(false); // Set isLoading menjadi false ketika data sudah dimuat
        })
        .catch((error) => {
          console.error('Gagal mengambil data keranjang:', error);
          setIsLoading(false); // Set isLoading menjadi false jika terjadi error
        });
    }, []);

    

    useEffect(() => {
      // Hitung total harga berdasarkan item yang dipilih
      const total = dataKeranjang.reduce((acc, item) => {
        if (itemDipilih.includes(item.id_keranjang)) {
          acc += item.harga_barang;
        }
        return acc;
      }, 0);
      setTotalHarga(total);
    }, [dataKeranjang, itemDipilih]);

    return (
      <Container>
        <Row>
          <Col>
            <div className='keranjang'>
              <h1>Keranjang Belanja</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Nama Produk</th>
                      <th>Harga</th>
                      <th>Stok Barang</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id='item_dipilih'>
                    {dataKeranjang.map((item) => (
                      <tr key={item.id_keranjang}>
                        <td className={itemDipilih.includes(item.id_keranjang) ? 'bg-primary' : ''}>
                          {item.nama_barang}
                        </td>
                        <td className={itemDipilih.includes(item.id_keranjang) ? 'bg-primary' : ''}>
                          {item.harga_barang}
                        </td>
                        <td className={itemDipilih.includes(item.id_keranjang) ? 'bg-primary' : ''}>
                          {item.stok}
                        </td>

                        <td>
                          <Button
                            className='bg-primary'
                            onClick={() => toggleItemPilihan(item.id_keranjang)}
                          >
                            {itemDipilih.includes(item.id_keranjang) ? 'Batal Pilih' : 'Pilih'}
                          </Button>
                          <Button
                            className='bg-danger'
                            onClick={() => handleDeleteItem(item.id_keranjang)}
                          >Hapus</Button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={3}><strong>Total Harga</strong></td>
                      <td colSpan={1}><strong>{totalHarga}</strong></td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <Button className='w-100'>Checkout</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  export default Keranjang;
