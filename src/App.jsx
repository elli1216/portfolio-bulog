import Header from "./Header"
import Members from "./Members"
import Projects from "./Projects";
import About from "./About";
import members from "./membersData";
import Contact from "./Contact";
import Footer from "./Footer";
import './styles.css';

function App() {

  return (
    <>
      <Header/>
      <About/>

      <div>
        <h1 className="members-title">Meet our team</h1>
      </div>
      <div className="members-list">
        {members.map((member, index) => (
            <Members key={index} img={member.img} name={member.name} desc={member.desc} />
          ))}
      </div>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
