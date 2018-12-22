class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = "player player";
        className += this.props.num;
        className += " ";
        className += this.props.status;
        return React.createElement(
            "div",
            { className: className },
            React.createElement(
                "p",
                null,
                this.props.score
            ),
            React.createElement(
                "p",
                null,
                this.props.name
            )
        );
    }
}

export default Player;