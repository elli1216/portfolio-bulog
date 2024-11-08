import Pfp from "./assets/pfp.jpg";
import ryanPfp from "./assets/ryan.jpg";
import paoloPfp from "./assets/pao.jpg";
import gianPfp from "./assets/gian.jpg";
import jamesPfp from "./assets/james.jpg";
import tyronPfp from "./assets/turon.jpg";

const members = [
  { img: Pfp, name: "Darl Ellison Floresca", desc: "Backend Developer" },
  { img: ryanPfp, name: "Ryan Carlo Gomez", desc: "Team Leader" },
  { img: paoloPfp, name: "Paolo Angelo", desc: "Web Designer" },
  { img: gianPfp, name: "Gian Victoria", desc: "Database Design" },
  { img: jamesPfp, name: "James Samuel Godoy", desc: "Fullstack Developer" },
  { img: tyronPfp, name: "Tyron Dimla", desc: "Backend Developer" }
];

function Members(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="pic" />
      <h1 className="card-title">{props.name}</h1>
      <p className="card-text">{props.desc}</p>
      <div className="social-icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
    </div>
  )
}

export default {members, Members};