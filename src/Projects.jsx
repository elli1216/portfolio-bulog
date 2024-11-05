import Home from './assets/academiq/HOME.png';
import Login from './assets/academiq/login.png';
import Calendar from './assets/academiq/CALENDAR.png';
import Calendar2 from './assets/academiq/CALENDAR2.png';
import Register from './assets/academiq/Create Account.png';
import EnterPin from './assets/academiq/EnterPIN.png';
import System from './assets/system.png';

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-list">
        <div className="project">
          <h3 className="project-list-title">School Management</h3>
          <div className="project-img-section">
            <img className="project-img-system" src={System} alt="System" />
          </div>
        </div>
        <div className="project">
          <h3 className="project-list-title">Academiq</h3>
          <div className="project-img-section">
            <img className="project-img" src={Home} alt="Home" />
            <img className="project-img" src={Register} alt="Register" />
            <img className="project-img" src={Calendar} alt="Calendar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;