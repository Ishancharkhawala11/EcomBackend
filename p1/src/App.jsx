import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Shop from "./pages/Shop" 
import ShopCatagory from "./pages/ShopCatagory" 
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Footer from './components/Footer/Footer'
import man_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kid_banner from "./components/assets/banner_kids.png"
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/mens' element={<ShopCatagory banner={man_banner} catgory="men" ></ShopCatagory>}></Route>
        <Route path='/womens' element={<ShopCatagory banner={women_banner}catgory="women"></ShopCatagory>}></Route>
        <Route path='/kids' element={<ShopCatagory banner={kid_banner} catgory="kids"></ShopCatagory>}></Route>
        <Route path='/product' element={<Product></Product>}>
          <Route path=':productId' element={<Product></Product>}></Route>
        </Route>  
        <Route path='/cart' element={<Cart></Cart>}></Route>  
        <Route path='/Login' element={<Login></Login>}></Route>  
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
