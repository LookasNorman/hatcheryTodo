import React, { useState } from 'react'
import { CircularProgress, ListItem, ListItemText } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

export default function Form({ item }) {
  const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }
  return (
      <>
        <ListItem divider>
          <ListItemText primary={item.title} />
          {visibility
            ? <Visibility onClick={toggleVisibility} />
            : <VisibilityOff onClick={toggleVisibility} />
          }
        </ListItem>
        {visibility &&
          item.data
        }
    </>
  )
}