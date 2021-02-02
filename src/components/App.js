import React from "react";
import Display from "./Display";
import Button from "./Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      current: "",
      previous: [],
      nextReset: false,
    };
  }

  reset = () => {
    this.setState({ current: " ", previous: [] });
  };

  addToCurrent = (symbol) => {
    if (["+", "-", "*", "/"].indexOf(symbol) > -1) {
      const { previous } = this.state;
      previous.push(this.state.current + symbol);
      this.setState({ previous });
    } else {
      if (this.state.current === "0" || this.state.nextReset) {
        this.setState({ current: symbol });
      } else {
        this.setState({ current: this.state.current + symbol });
      }
    }
    this.setState({ current: this.state.current + symbol });
  };

  calculate = (symbol) => {
    let { current, previous, nextReset } = this.state;
    // if (previous.length > 0) {
    //   current = eval(String(previous[previous.length - 1] + current));
    //   console.log(current, "Eval");
    //   this.setState({ current, previous: [], nextReset: true });
    // }
    console.log(symbol);
    console.log("current", current);

    this.setState({
      current: eval(current),
    });

    // if (previous[previous.length - 2] === "+") {
    //   return (
    //     parseFloat(previous[previous.length - 1]) + parseFloat(current)
    //   ).toString();
    // }
    console.log("Prev", previous);
  };

  render() {
    const btns = [
      { symbol: "=", col: 1, action: this.calculate },
      { symbol: "%", col: 3, action: this.addToCurrent },
      { symbol: "/", col: 4, action: this.addToCurrent },
      { symbol: "9", col: 1, action: this.addToCurrent },
      { symbol: "8", col: 2, action: this.addToCurrent },
      { symbol: "7", col: 3, action: this.addToCurrent },
      { symbol: "*", col: 4, action: this.addToCurrent },
      { symbol: "6", col: 1, action: this.addToCurrent },
      { symbol: "5", col: 2, action: this.addToCurrent },
      { symbol: "4", col: 3, action: this.addToCurrent },
      { symbol: "-", col: 4, action: this.addToCurrent },
      { symbol: "3", col: 1, action: this.addToCurrent },
      { symbol: "2", col: 2, action: this.addToCurrent },
      { symbol: "1", col: 3, action: this.addToCurrent },
      { symbol: "+", col: 4, action: this.addToCurrent },
      { symbol: "AC", col: 1, action: this.reset },
      { symbol: "0", col: 3, action: this.addToCurrent },
    ];
    return (
      <div>
        <Display value={this.state.current} />
        {btns.map((btn, i) => {
          return (
            <Button
              key={i}
              symbol={btn.symbol}
              col={btn.col}
              action={(symbol) => btn.action(symbol)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
