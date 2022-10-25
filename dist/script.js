class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      answer: "",
      display: "0" };

    this.showDisplay = this.showDisplay.bind(this);
    this.reset = this.reset.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperand = this.handleOperand.bind(this);
  }

  showDisplay(event) {
    event.preventDefault();
    if (this.state.display == "0") {
      this.setState({
        display: event.target.value });

    } else {
      this.setState({
        display: this.state.display + event.target.value });

    }
  }

  handleDecimal(event) {
    event.preventDefault();
    if (event.target.value == ".") {
      this.setState({
        display: this.state.display + event.target.value });

      event.currentTarget.disabled = true;
    } else if (this.state.display == "0" && event.target.value == ".") {
      this.setState({
        display: this.state.display + event.target.value });

      event.currentTarget.disabled = true;
    }
  }

  handleOperand(event) {
    this.setState({
      display: this.state.display + event.target.value });

    document.getElementById("decimal").disabled = false;
  }

  calculate() {
    try {
      this.setState({
        // eslint-disable-next-line
        display: eval(this.state.display) //|| "") + ""
      });
    } catch (e) {
      this.setState({
        display: "error" });

    }
  }

  reset() {
    this.setState({
      display: 0 });

    document.querySelector("#decimal").disabled = false;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calc" }, /*#__PURE__*/
      React.createElement("div", { id: "calc-output" }, /*#__PURE__*/
      React.createElement("input", { type: "text", id: "display", disabled: true, value: this.state.display })), /*#__PURE__*/

      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.reset }, "AC"), /*#__PURE__*/


      React.createElement("button", {
        id: "divide",
        className: "operator",
        value: "/",
        onClick: this.handleOperand }, "/"), /*#__PURE__*/



      React.createElement("button", {
        id: "multiply",
        className: "operator",
        value: "*",
        onClick: this.handleOperand }, "*"), /*#__PURE__*/




      React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "seven", value: "7", onClick: this.showDisplay }, "7"), /*#__PURE__*/



      React.createElement("button", { id: "eight", value: "8", onClick: this.showDisplay }, "8"), /*#__PURE__*/


      React.createElement("button", { id: "nine", value: "9", onClick: this.showDisplay }, "9"), /*#__PURE__*/


      React.createElement("button", {
        id: "subtract",
        className: "operator",
        value: "-",
        onClick: this.handleOperand }, "-"), /*#__PURE__*/




      React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "four", value: "4", onClick: this.showDisplay }, "4"), /*#__PURE__*/


      React.createElement("button", { id: "five", value: "5", onClick: this.showDisplay }, "5"), /*#__PURE__*/


      React.createElement("button", { id: "six", value: "6", onClick: this.showDisplay }, "6"), /*#__PURE__*/


      React.createElement("button", {
        id: "add",
        className: "operator",
        value: "+",
        onClick: this.handleOperand }, "+"), /*#__PURE__*/




      React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "one", value: "1", onClick: this.showDisplay }, "1"), /*#__PURE__*/


      React.createElement("button", { id: "two", value: "2", onClick: this.showDisplay }, "2"), /*#__PURE__*/


      React.createElement("button", { id: "three", value: "3", onClick: this.showDisplay }, "3"), /*#__PURE__*/


      React.createElement("button", { id: "decimal", value: ".", onClick: this.handleDecimal }, "."), /*#__PURE__*/



      React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "zero", value: "0", onClick: this.showDisplay }, "0"), /*#__PURE__*/


      React.createElement("button", { id: "equals", value: "=", onClick: this.calculate }, "="))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("root"));