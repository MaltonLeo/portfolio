import Header from './components/Header'
import About from './pages/About'
import HomeComponent from './pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element= {<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
