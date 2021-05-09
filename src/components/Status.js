import React ,{ Component }  from 'react';

class Status extends Component {
    constructor(){
        super();
        this.state = {
            message : 'New'
        }
    }

    changeStatus(){
        this.setState({
            message : 'Congratualations! You have Completed'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeStatus()}>Submit</button>
            </div>
        )
        
    }
}

export default Status;