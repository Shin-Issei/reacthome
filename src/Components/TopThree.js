import React from "react";
class TopThreeTODO extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ToDoInput: "I'm jordan",
      ListElements: ["Hello", "World"]
    }

    this.testAdd = this.testAdd.bind(this);
    this.updateTextInput = this.updateTextInput.bind(this);
  }

  updateTextInput(e){
    this.setState({ToDoInput: e.target.value})
  }

  testAdd(){
  this.setState({ListElements: this.state.ListElements.concat(<li>{this.state.otherState}</li>)})
  }
  render() {
    return (
      <div id="top">
        <ul>{this.state.ListElements}</ul>
        <input value={this.state.ToDoInput} type="text" onChange={this.updateTextInput}></input>
        <button onClick={this.testAdd}>Test Add</button>
      </div>
    )
  }
}

export default TopThreeTODO;
