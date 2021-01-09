import React from 'react'
import AddForm from '../components/form/basic/AddForm'
import ObjectAddress from '../components/form/basic/ObjectAddress'
import Order from '../components/form/basic/Order'

export default function AddOrder() {
  const form = <Order/>
  const forms = [
    {"title": "Lokalizacja",
    "data": <ObjectAddress/>}
  ]


  return (
    <AddForm form={form} forms={forms}/>
  )
}
