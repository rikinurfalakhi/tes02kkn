import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Perubahan ini
import { navLinks } from '../data/index';

import LogoKkn from '../assets/img/logo__kkn.png';

import { FiShoppingCart } from 'react-icons/fi';

function NavbarComponent() {
    const navigate = useNavigate();
    localStorage.setItem('logged_in_user_id', 2405)

    const [changeColor, setChangeColor] = useState(true);
    const [loginStatus, setLoginStatus] = useState(false);
    const [activeTabs, setActiveTabs] = useState(navLinks[0].text);

    useEffect(() => {
        // Check if 'logged_in_user_id' exists in local storage
        const loggedInUserId = localStorage.getItem('logged_in_user_id');
        if (loggedInUserId) {
            setLoginStatus(true);
        }

        changeBackgroundColor();
        window.addEventListener('scroll', changeBackgroundColor);
    }, []);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    function navigateToLogin() {
        navigate('/login');
    }

    const hapus = () => {
        localStorage.removeItem('logged_in_user_id');
        console.log('Hapus selesai');
    }

    function navigateToDaftar() {
        navigate('/registrasi');
    }

    return (
        <Navbar bg="light" fixed="top" expand="lg" className={changeColor ? 'color-active' : ''}>
            <Container>
                <Navbar.Brand href="#home" className="fs-3 fw-bold">
                    <NavLink to="/"><img className="logo__kkn" src={LogoKkn} alt="" /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        {navLinks.map((link) => {
                            return (
                                <div key={link.id} className="nav-link">
                                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')} end>{link.text}</NavLink>
                                </div>
                            )
                        })}
                    </Nav>
                    <div className="text-center d-flex align-items-center justify-content-center">
                        <Nav className="ikon-keranjang">
                            <NavLink to={'/keranjang'} className="nav-link"><FiShoppingCart /></NavLink>
                        </Nav>
                        {loginStatus ? (
                            <div className="user-info-container">
                                {/* Tampilkan informasi akun di sini */}
                                <span>Selamat datang, User!</span>
                            </div>
                        ) : (
                            <>
                                <button onClick={() => navigateToLogin()} className="btn btn-outline-danger rounded-1 margin_right">Masuk</button>
                                <button onClick={() => navigateToDaftar()} className="btn btn-outline-danger rounded-1 active">Daftar</button>
                            </>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
