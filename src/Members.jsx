
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

export default Members;