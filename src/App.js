import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

class App extends Component {
  state = {
    tasks: [
      { taskName: 'odkurzanie', completed: false },
      { taskName: 'gotowanie', completed: false }
    ],
    taskName: ''//searched taskName
  }
  handleChange = (event) => {
    this.setState({ taskName: event.target.value })
  }
  handleClick = (event) => {
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks;
      tasks.push({ taskName: this.state.taskName, completed: false });
      this.setState({ tasks, taskName: '' })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <TextField
            onChange={this.handleChange}
            value={this.state.taskName}
            fullWidth={true}
            hintText="Enter your task here" />
          <RaisedButton
            label="Add"
            primary={true}
            fullWidth={true}
            onClick={this.handleClick}
          />
        </div>
        <List>

          {this.state.tasks.map((task, index) => (
            <div>{task.taskName}</div>
          ))}
        </List>

      </div>
    )
  }
}

export default App
