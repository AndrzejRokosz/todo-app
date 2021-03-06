import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const API_URL = 'https://moj-firebase.firebaseio.com'


class App extends Component {
  state = {
    tasks: [],
    taskName: ''//searched taskName
  }
  handleChange = (event) => {
    this.setState({ taskName: event.target.value })
  }

  addTask = () => {
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
          this.setState({ tasks, taskName: '' })
        })

    }
  }

  handleClick = () => {///add to database
    this.addTask()
  }

  loadData = () => {
    fetch(`${API_URL}/tasks.json`)
      .then(response => response.json())
      .then(data => {
        if (!data) {
          this.setState({ tasks: [] })
          ////zabezpieczenie w przypadku pustej bazy danych
          return
        }
        const array = Object.entries(data)//zamiana na tablice index=1 klucz=0
        const taskList = array.map(([id, values]) => {
          values.id = id //nowa wlasciwosc w obiekcie zadania
          return values
        })
        this.setState({ tasks: taskList })
        console.log('data', taskList)
      })
  }

  componentWillMount = () => {  //// read from database
    this.loadData()
  }

  handleKeyDown = event => { /// add task on enter hit 
    console.log(event.keyDown)
    if (event.keyCode === 13) {
      this.addTask()
    }
  }

  handleDelete = (id) => {
    fetch(`${API_URL}/tasks/${id}.json`, {
      method: 'DELETE'
    })
      .then(() => {
        this.loadData()
      })
  }
  handleCheck = (task) => {
    // task.completed = !task.completed
    // fetch(`${API_URL}/tasks/${task.id}.json`, {
    //   method: 'PUT',
    //   body: JSON.stringify(task)
    // })

    task.completed = !task.completed
    fetch(`${API_URL}/tasks/${task.id}.json`, {
      method: 'PATCH',
      body: JSON.stringify(task)
    })
    .then(() => {
      this.loadData()
    })



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
              primaryText={task.taskName}
              leftCheckbox={
              <Checkbox
                defaultChecked={task.completed}
                 onCheck={() => this.handleCheck(task)}
                  />}
              rightIconButton={
                <IconButton>
                  <DeleteIcon onClick={() => this.handleDelete(task.id)} />
                </IconButton>
              }
            />
          ))}
        </List>

      </div>
    )
  }
}

export default App
