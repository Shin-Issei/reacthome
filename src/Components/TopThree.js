import React from "react";
import KeyRemoval from "./keyRemovaltest";
class TopThreeTODO extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ToDoInput: "",
      ListElements: []
    }

    this.testAdd = this.testAdd.bind(this);
    this.updateTextInput = this.updateTextInput.bind(this);
    this.removeFromList = this.removeFromList.bind(this); // This will be passed into Todo list item components as props
  }

  removeFromList(){
    alert("Test Alert")
  }

  updateTextInput(e){
    this.setState({ToDoInput: e.target.value})
  }

  testAdd(){
  // this.setState({ListElements: this.state.ListElements.concat(<li>{this.state.ToDoInput}<button>Test</button> </li>)})
  this.setState({ListElements: this.state.ListElements.concat(<KeyRemoval key="2" del={this.removeFromList}/>)})
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
