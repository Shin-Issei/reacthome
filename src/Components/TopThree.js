// This is just like the old todo list app lets try not to make this too complicated...
import React from "react";
/*  The flow of the operations

I - Get an input (Make an input box)


*/
class TopThreeTodo extends React.Component() {
  render() {
    return (
      <div id="top-three">
        <input value="The to do list text is coming from here"></input>
      </div>
    );
  }
}
export default TopThreeTodo;
