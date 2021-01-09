import React from 'react';
import Todo from '../components/form/basic/Todo'
import ObjectAddress from '../components/form/basic/ObjectAddress'
import Machine from '../components/form/basic/Machine'
import TodoType from '../components/form/basic/TodoType'
import MachineGroups from '../components/form/basic/MachineGroups'
import Hall from '../components/form/basic/Hall'
import AddForm from '../components/form/basic/AddForm'


export default function AddTodo() {
  const form = <Todo/>
  const forms = [
    {"title": "Dodaj lokalizacje", "data": <ObjectAddress/>},
    {"title": "Dodaj maszyne", "data": <Machine/>},
    {"title": "Dodaj typ zadania", "data": <TodoType/>},
    {"title": "Dodaj halę / kurnik", "data": <Hall/>},
    {"title": "Dodaj grupę maszyn", "data": <MachineGroups/>}
  ]


  return (
    <AddForm form={form} forms={forms}/>
  )
}
