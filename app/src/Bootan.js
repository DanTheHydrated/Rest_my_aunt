export default function Bootans(props) {
    return (
        <h4
            className="text-center"
            onClick={() => props.onClick(props.text)}
        >
            {props.text}
        </h4>
    );
};
//creates the buttons with props passed through it