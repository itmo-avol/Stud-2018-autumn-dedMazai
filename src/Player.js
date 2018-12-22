class Player extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        let className = "player player";
        className +=this.props.num;
        className +=" ";
        className +=this.props.status;
        return(
               <div className={className}>
               <p>{this.props.score}</p>
               <p>{this.props.name}</p>
               </div>
               )
    }
}

export default Player;
