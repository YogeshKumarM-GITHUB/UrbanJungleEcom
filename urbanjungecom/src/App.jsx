import './App.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
  )
}

export default App
