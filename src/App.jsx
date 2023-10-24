import './App.scss'
import About from './Components/Content/About/About'
import Hero from './Components/Content/Hero/Hero'
import Services from './Components/Content/Services/Services'
import Tours from './Components/Content/Tours/Tours'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className="app">
      <Header/>
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  )
}

export default App
