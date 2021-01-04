import React from 'react';
import './Button.css';

class Button extends React.Component {

    render() {

        return (
            <div>
                <button className="calcButton" onClick= {() => {this.props.action(this.props.symbol)}} >
                    {this.props.symbol}
                </button>
            </div>
        )
    }
}

export default Button;