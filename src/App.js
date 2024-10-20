import './aseets/fonts/fonts.css'
import './reset.css'
import './global.css'

import About from './layout/about/About'
import Cases from './layout/cases/Cases'
import CasesInfo from './layout/casesInfo/CasesInfo'
import Contact from './layout/contact/Contact'
import Decor from './layout/decor/Decor'
import Examples from './layout/examples/Examples'
import Footer from './layout/footer/Footer'
import Header from './layout/header/Header'
import What from './layout/what/What'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Cases></Cases>
      <What></What>
      <Decor></Decor>
      <Examples></Examples>
      <CasesInfo></CasesInfo>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
