import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormPart from './FormPart'

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
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    minWidth: '300px',
    margin: '1vw 0',
    borderRadius: '0.5vw',
  },
}))

export default function AddForm({ form, forms }) {
  const classes = useStyles()

  return (
    <header className={`${classes.main} ${classes.flex}`}>
      <Paper className={`${classes.card}`}>
        {form}
      </Paper>
        <Paper className={`${classes.card}`}>
          <FormPart forms={forms}/>
        </Paper>

    </header>
  )
}
