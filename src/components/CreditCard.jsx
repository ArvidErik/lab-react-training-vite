import visa from "../assets/images/visa.png"
import masterCard from "../assets/images/master-card.svg"
import "./CreditCard.css"

export default function CreditCard (props) {

    const selectCard = () => {
        switch (props.type) {
            case "Master Card":
                return masterCard;
            default:
                return visa;
        }
    }

    return (
        <div className="card" style={{backgroundColor:`${props.bgColor}`, color: `${props.color}`}}>
            <img src={selectCard()} alt="" />
            <h2>.... .... .... {(props.number).slice(-4)}</h2>
            <p>Expires {props.expirationMonth}/{String((props.expirationYear)).slice(-2)}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}