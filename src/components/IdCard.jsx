import "./idCard.css"

function IdCard (props) {
    return (

        <div className="idCard-cont">
            <img src={props.picture} alt="" />
            <div className="id-detail">
                <p><strong>First name:</strong> {props.lastName}</p>
                <p><strong>Last name:</strong>{props.firstName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height/100}m</p>
                <p><strong>Birth:</strong> {props.birth}</p>
            </div>

        </div>


    )
}

export default IdCard;