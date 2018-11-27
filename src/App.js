import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  state = {
    tasks: [
      { taskName: 'odkurzanie', completed: false },
      { taskName: 'gotowanie', completed: false }
    ],
    taskName: ''//searched taskName
  }

  render() {
    return (
      <div className="App">
        <div>
          <TextField hintText="Enter your task here" />
          <RaisedButton label="Add" primary={true} />
        </div>
        <div>
          {this.state.tasks.map((task, index) => (
            <div>{task.taskName}</div>
          ))}
        </div>

      </div>
    )
  }
}

export default App
