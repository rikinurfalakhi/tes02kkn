import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../../src/assets/img/hero.png'
import { kelasTerbaru, dataHeaderImage, dataSwiper } from '../data'
import { useNavigate } from 'react-router-dom'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
    let navigate = useNavigate()

    return (
        <div className="homepage">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className='header-box d-flex align-items-center pt-lg-3 k'>
                        <Col lg='6'>
                            <h1 className='mb-4'>Desa Kademangan Mojoagung</h1><br />
                            <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis, sed id veritatis tempore recusandae itaque nisi, </p>
                            <button className='btn btn-danger btn-lg rounded-1 me-2'>cta1</button>
                            <button className='btn btn-outline-danger btn-lg rounded-1 me-2'>cta2</button>
                        </Col>
                        <Col lg="6" className='pt-lg-0 l hero-swiper-content'>
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
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper po"
                        >
                            {dataHeaderImage.map((data) => {
                                return (
                                    <SwiperSlide key={data.id} className='shadow lope'>
                                        <div>
                                            <img src={data.img} alt="" />
                                        </div>
                                    </SwiperSlide>
                                )

                            })}

                        </Swiper>
 
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="kelas w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>Dokumentasi Kegiatan</h1>
                        </Col>
                    </Row>
                    <Row>
                        {kelasTerbaru.map((kelas) => {
                            return <Col key={kelas.id} className='shadow'>
                                <img src={kelas.image} className='w-100 rounded-top'></img>
                                <div className='star mb-2'>
                                    <i className={kelas.star1}></i>
                                    <i className={kelas.star2}></i>
                                    <i className={kelas.star3}></i>
                                    <i className={kelas.star4}></i>
                                    <i className={kelas.star5}></i>
                                </div>
                                <h5 className='mb-5'>{kelas.title}</h5>
                                <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                                    <p className='m-0 text-primary fw-bold'>{kelas.price}</p>
                                </div>
                                <button className='btn btn-danger rounded-1 mb-3'>{`${kelas.buy}`}<i class="ms-3 fa-solid fa-chevron-right"></i></button>
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <button className='btn btn-success rounded-5 btn-lg' onClick={() => navigate('/kelas')}> Lihat Semua<i class="ms-3 fa-solid fa-chevron-right"></i></button>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonial py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold my-5'>Testimonials</h1>
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
                            className="mySwiper"
                        >
                            {dataSwiper.map((data) => {
                                return (
                                    <SwiperSlide key={data.id} className='shadow-sm'>
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
        </div>
    )
}

export default HomePage