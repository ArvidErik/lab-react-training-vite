export default function Random (props) {
    
    const random = () => {
        return props.min + Math.floor(Math.random() * (props.max-props.min))
    }

    return (
    
        <div>
            <p>Random value between {props.min} and {props.max} = {random()}</p>
        </div>
    )
}