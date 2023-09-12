import { Container, Row, Col, Button } from 'react-bootstrap'
import HeroImage from '../../src/assets/img/hero.png'
import { kelasTerbaru, dataHeaderImage, dataSwiper } from '../data'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import gambarHero from '../assets/img/3d.jpg'
import FooterComponent from '../components/FooterComponent'
// import required modules

const HomePage = () => {
    let navigate = useNavigate()
    // const getProduct = (kelas) => {
    //     const slug = kelas.title.toLowerCase().replace(/\s+/g, '-');
    //     console.log(slug);
    //     navigate(`detail-produk/${slug}`)
    // }
    const [selectedProduct, setSelectedProduct] = useState(null);

    const hapus = () => {

    }
    const getProduct = (item) => {
        const slug = item.title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/detail-produk/${slug}`, { state: { product: item } });
    }

    const navigateToProduct = () => {
        navigate('/produk')
    }

    return (
        <div className="homepage">
            <header className="w-100 min-vh-100 header__container">
                <div className="konten1">
                    <h1>Temukan produk <span>lokal</span> impian</h1>
                    <button onClick={navigateToProduct} className='btn btn-danger rounded-1 mb-3'>
                        Jelajahi Produk <i className="ms-3 fas fa-chevron-right"></i>
                    </button>
                    <button onClick={hapus} className='btn btn-danger rounded-1 mb-3'>
                        Hapus <i className="ms-3 fas fa-chevron-right"></i>
                    </button>
                </div>
                <div className="konten2">
                    {/* Konten lainnya */}
                </div>
            </header>
            <div className="kelas w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>Produk Premium</h1>
                        </Col>
                    </Row>
                    <Row>
                        {kelasTerbaru.map((item) => {
                            return <Col key={item.id} className='shadow'>
                                <img src={item.image} className='w-100 rounded-top'></img>
                                <div className='star mb-2'>
                                    <i className={item.star1}></i>
                                    <i className={item.star2}></i>
                                    <i className={item.star3}></i>
                                    <i className={item.star4}></i>
                                    <i className={item.star5}></i>
                                </div>
                                <h5 className='mb-5'>{item.title}</h5>
                                <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                                    <p className='m-0 text-primary fw-bold'>{item.price}</p>
                                </div>
                                <button onClick={() => getProduct(item)} className='btn btn-danger rounded-1 mb-3'>{`${item.buy}`}<i class="ms-3 fa-solid fa-chevron-right"></i></button>
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <button className='btn btn-success rounded-5 btn-lg' onClick={() => getProduct()}> Lihat Semua<i class="ms-3 fa-solid fa-chevron-right"></i></button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonial py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold my-5'>Testimoni</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper okp"
                        >
                            {dataSwiper.map((data) => {
                                return (
                                    <SwiperSlide key={data.id} className='shadow-sm okp'>
                                        <p className='desc'>{data.desc}{console.log(data.desc)}</p>
                                        <div className='people'>
                                            <img src={data.image} alt="" />
                                            <div>
                                                <h5 className='mb-1'>{data.name}</h5>
                                                <p className='m-0 fw-bold'>{data.skill}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )

                            })}

                        </Swiper>
                    </Row>
                </Container>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default HomePage