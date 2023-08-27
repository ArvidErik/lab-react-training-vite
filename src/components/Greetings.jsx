function Greetings (props) {
    
    function renderSwitch () {
        switch (props.lang) {
            case "de":
                return "Hallo";

            case "es":
                return "Hola";

            case "fr":
                return "Bonjour";

            default:
                return "Hello";
                break;
        }
    }
    
    
    return (
        <div>
            <h3>{renderSwitch()} {props.children}</h3>
        </div>
    )
}

export default Greetings;