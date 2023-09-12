import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Keranjang from './pages/Keranjang'
import NavbarComponent from '../src/components/NavbarComponent'
import Produk from './pages/Produk'
import Toko from './pages/Toko'
import Login from './pages/Login'
import Registrasi from './pages/Registrasi'
import DetailProduk from './pages/DetailProduk'
import Profile from './pages/Profile'
// import FooterComponent from './components/FooterComponent'

function App() {



  return (
    <div>
      <NavbarComponent></NavbarComponent>

      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/produk' Component={Produk}></Route>
        <Route path='/toko' Component={Toko}></Route>
        <Route path='/keranjang' Component={Keranjang}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/registrasi' Component={Registrasi}></Route>
        <Route path='/detail-produk/:slug' element={<DetailProduk />} />
        <Route path='/profil' element={<Profile />} />
      </Routes>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  )

}

export default App
