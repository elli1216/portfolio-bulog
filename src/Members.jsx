
function Members(props){
    return (
        <div className="card">
            <img className="card-img" src={props.img} alt="pic" />
            <h1 className="card-title">{props.name}</h1>
            <p className="card-text">{props.desc}</p>
        </div>
    )
}

export default Members;