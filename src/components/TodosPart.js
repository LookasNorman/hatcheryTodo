import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { EntityAll } from './EntityAll'
import { CircularProgress, ListItem, ListItemText } from '@material-ui/core'
import { Add, Visibility, VisibilityOff } from '@material-ui/icons'

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

export default function TodosPart({ title, data }) {
  const classes = useStyles()
  const [visibility, setVisibility] = useState(true)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <>
      <ListItem divider>
        <ListItemText primary={title} />
        <Add />
        {visibility ? <Visibility onClick={toggleVisibility} /> : <VisibilityOff onClick={toggleVisibility} />}
      </ListItem>
      {visibility &&
      <header className={`${classes.main} ${classes.flex}`}>
        {Object.entries(data).map(([key, item]) => (
          <EntityAll key={key} data={item} header={key} />
        ))}
      </header>
      }
    </>
  )
}