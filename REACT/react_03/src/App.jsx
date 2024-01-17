import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from "./components/Button"
import Products from "./components/Products"
import Card from "./components/Card"
import Buttons from "./components/Buttons"

function App() {
  const imgFashion ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933';
  const imgDark = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747';
  const Beige = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437';

  return (
    <>
    < Navbar />
    < Main />
    < Button label="Send" />
    < Button label="Cancel" />
    
    <Products 
    img={imgFashion}
    name="Fashion"
    description="Tennis GenerationMagic, programados para triunfar."
    price="$1959.99"
    />
    <Products 
    img= {imgDark}
    name="Ghost"
    description="Tennis fantasma, tan ligeros que parecen no existir."
    price="$2159.99"
    />
    <Products 
    img={Beige}
    name="Camesho"
    description="Tennis CamelCase, no corre sin ellos."
    price="$999.99"
    />
    
    {/* 
    Aquí irá mi componete de MUI y JoyUI
    */}
    <Card />
    <br></br>
    <Buttons />
    </>
  )
}

export default App
