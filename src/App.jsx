import Header from "./Header"
import {members, Members} from "./Members"
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import './styles.css';

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Members members={members} Members={Members}/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
