import React from 'react';
import ButtonDisplay from './components/ButtonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state  = {
            current: '',
            prev: [],
            next: []
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState();
    }
    render() {
        return (
            <div>
                <input className = "display" type = "text" onChange =  {this.handleClick()}  defaultValue='0' />
                <ButtonDisplay display={this.state.current} />
            </div>
        )
    }
}

export default App;
