import React from 'react';
import Todo from './basic/Todo'
import ObjectAddress from './basic/ObjectAddress'
import Machine from './basic/Machine'
import TodoType from './basic/TodoType'
import { makeStyles } from '@material-ui/core/styles'
import MachineGroups from './basic/MachineGroups'
import Hall from './basic/Hall'

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    alignItems: 'stretch',
    margin: '1vw 0.5vw',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
}))

export default function AddTodo() {
  const classes = useStyles()
  return (
    <header className={`${classes.main} ${classes.flex}`}>
      <Todo/>
      <ObjectAddress/>
      <Machine/>
      <TodoType/>
      <Hall/>
      <MachineGroups/>
    </header>
  );
}
