import React from "react";
import "./Display.css";

class Display extends React.Component {
  state = {};
  render() {
    return (
      <div className="Display">
        <span ref={this.spanRef} className="DisplaySpan">
          {this.props.value}
        </span>
      </div>
    );
  }
}

export default Display;
