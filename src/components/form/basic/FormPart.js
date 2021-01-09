import React, { useState } from 'react'
import Form from './Form'
export default function FormPart({ forms }) {

  return (
    forms.map((item, key) => (
      <Form key={key} item={item} />
    ))
  )
}