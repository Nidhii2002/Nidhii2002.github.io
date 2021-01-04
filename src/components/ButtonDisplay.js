import React from 'react';
import Button from './Button';

class ButtonDisplay extends React.Component {

    reset = () => {
        this.setState({display: '0'});
    }

    addToCurrent = (symbol) => {
        console.log("Nidhi");
        console.log( typeof(symbol));
        this.setState({display: this.props.display.concat(symbol)});
        console.log(this.props.display);
        
    }

    render() {
        const btns = [
            { symbol: "C", col: 1, action: this.reset},
            { symbol: "7", col: 1, action: this.addToCurrent},
            { symbol: "8", col: 2, action: this.addToCurrent},
            { symbol: "9", col: 3, action: this.addToCurrent},
            { symbol: "*", col: 4, action: this.addToCurrent},
            { symbol: "4", col: 1, action: this.addToCurrent},
            { symbol: "5", col: 2, action: this.addToCurrent},
            { symbol: "6", col: 3, action: this.addToCurrent},
            { symbol: "-", col: 4, action: this.addToCurrent},
            { symbol: "1", col: 1, action: this.addToCurrent},
            { symbol: "2", col: 2, action: this.addToCurrent},
            { symbol: "3", col: 3, action: this.addToCurrent},
            { symbol: "+", col: 4, action: this.addToCurrent},
            { symbol: "0", col: 1, action: this.addToCurrent},
            { symbol: "=", col: 2, action: this.addToCurrent}

        ];
        return(
            <div>
                {btns.map((btn, i) => {
                    return <Button key={i} symbol={btn.symbol} col={btn.col} action={ (symbol) => btn.action(symbol) } />
                })}
                
            </div>
        )
    }
}

export default ButtonDisplay;