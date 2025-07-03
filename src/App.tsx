
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './home/Navbar'
import Footer from './home/Footer'

function App() {
  

  return (
    <>

    <div>
      <Navbar></Navbar>
    </div>
     <main className="min-h-screen">
      <Outlet></Outlet>
     </main>
    <Footer></Footer>


     
      
    </>
  )
}

export default App
