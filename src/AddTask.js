import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTask=(props)=>(
<div>
    <TextField hintText="Enter your task here"/>
    <RaisedButton label="Add" primary={true}/>
</div>
)

export default AddTask 