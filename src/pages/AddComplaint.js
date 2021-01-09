import React from 'react'
import AddForm from '../components/form/basic/AddForm'
import Complaint from '../components/form/basic/Complaint'
import Machine from '../components/form/basic/Machine'

export default function AddComplaint() {
  const form = <Complaint/>
  const forms = [
    {"title": "Maszyny",
      "data": <Machine/>}
  ]

  return (
    <AddForm form={form} forms={forms}/>
  )
}
