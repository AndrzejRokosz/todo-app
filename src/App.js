import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

const API_URL = 'https://moj-firebase.firebaseio.com'


class App extends Component {
  state = {
    tasks: [],
    taskName: ''//searched taskName
  }
  handleChange = (event) => {
    this.setState({ taskName: event.target.value })
  }
  handleClick = (event) => {///add to database
    if (this.state.taskName !== '') {
      let tasks = this.state.tasks
      let newTask = { taskName: this.state.taskName, completed: false }
      fetch(`${API_URL}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify(newTask)
      })
        .then(response => response.json())
        .then((data) => {
          newTask.id = data.name
          tasks.push(newTask)
          // tasks.push(newTask)
          this.setState({ tasks, taskName: '' })
        })

    }
  }


  componentWillMount = () => {  //// read from database
    fetch(`${API_URL}/tasks.json`)
      .then(response => response.json())
      .then(data => {
        const array = Object.entries(data)//zamiana na tablice index=1 klucz=0
        const taskList = array.map(([id, values]) => {
          values.id = id //nowa wlasciwosc w obiekcie zadania
          return values
        })
        this.setState({tasks:taskList})
        console.log('data', taskList)
      })

  }

  handleKeyDown=event=>{ /// add task on enter hit 
    console.log(event.keyDown)
    if(event.keyCode===13){
      this.handleClick()
    }
  }

  render() {
    return (
      <div className="App">

        <div>
          <TextField
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.taskName}
            fullWidth={true}
            floatingLabelText="Enter your task here"
            />

          <RaisedButton
            label="Add"
            primary={true}
            fullWidth={true}
            onClick={this.handleClick}
          />
        </div>

        <List>
          {this.state.tasks.map(task => (
            <ListItem
              key={task.id}
            >{task.taskName}</ListItem>
          ))}
        </List>

      </div>
    )
  }
}

export default App
