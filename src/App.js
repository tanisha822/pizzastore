import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Displayitems from "./Components/Displayitems";
import AddDisplayitems from "./Components/AddDisplayitems";
import UpdateDisplayitems from "./Components/UpdateDisplayitems";
import ContactUs from "./Components/ContactUs";
import {Routes , Route } from 'react-router-dom';




function App(){
  return (
    <>
    <Menu/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Displayitems" element={<Displayitems/>}/>
      <Route path="/Add-Displayitems" element={<AddDisplayitems/>}/>
      <Route path="/update-Displayitems/:id" element={<UpdateDisplayitems/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>


    <Footer/>
    </>
  )
}


export default App;


