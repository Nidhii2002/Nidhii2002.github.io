import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    const className = [
      "calcButton",
      this.props.symbol === "=" ? "equal" : "",
      this.props.symbol === "0" ? "zero" : "",
      this.props.symbol === "AC" ? "clear" : "",
      this.props.symbol === "+" ? "dark" : "",
      this.props.symbol === "-" ? "dark" : "",
      this.props.symbol === "*" ? "dark" : "",
      this.props.symbol === "/" ? "dark" : "",
      this.props.symbol === "%" ? "dark" : "",
    ];
    return (
      <div>
        <button
          className={className.join(" ").trim()}
          onClick={() => {
            this.props.action(this.props.symbol);
          }}
        >
          {this.props.symbol}
        </button>
      </div>
    );
  }
}

export default Button;
