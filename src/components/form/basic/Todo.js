import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputLabel, MenuItem, Select, Button, CardContent, Card } from '@material-ui/core'
import { CardHeader } from '../../basic/CardHeader'
import { getObjectsAddresses } from '../../../api/ObjectsAddresses'
import { getMachines } from '../../../api/Machines'
import { getTodoType } from '../../../api/TodoType'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    minWidth: '300px',
    margin: '1vw 0',
    backgroundColor: '#eee',
    borderRadius: '0.5vw',
  },
  content: {
    flex: '1 0 auto',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    alignContent: 'center',
  },
}))

export default function Todo() {
  const classes = useStyles()
  const { handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)
  const [objectAddressList, setObjectAddressList] = useState()
  const [machineList, setMachineList] = useState()
  const [todoTypeList, setTodoTypeList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const objectAddress = await getObjectsAddresses()
      if (!objectAddress.error) {
        setObjectAddressList(objectAddress.data)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const machines = await getMachines()
      if (!machines.error) {
        setMachineList(machines.data)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const todoTypes = await getTodoType()
      if (!todoTypes.error) {
        setTodoTypeList(todoTypes.data)
      }
    }
    fetchData()
  }, [])

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={`${classes.details} ${classes.flex}`}>
          <CardHeader data='Dodaj zadanie' />
        </div>
        <form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='title'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <TextField
              id='standard-basic'
              label='Nazwa'
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name='description'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <TextField
              id='standard-basic'
              label='Opis'
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name='date'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <TextField
              id='standard-basic'
              label='Data'
              type='date'
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name='repeatTime'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <TextField
              id='standard-basic'
              label='Czas powtórzeń (dni)'
              type='number'
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name='objectAddress'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <>
              <InputLabel id='demo-simple-select-label'>Lokalizacja</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='objectAddress'
                onChange={onChange}
              >
                {objectAddressList && objectAddressList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </>}
          />
          <Controller
            name='machine'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <>
              <InputLabel id='demo-simple-select-label'>Maszyna</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='objectAddress'
                onChange={onChange}
              >
                {machineList && machineList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </>}
          />
          <Controller
            name='todoType'
            control={control}
            defaultValue=''
            render={({ onChange, value }) => <>
              <InputLabel id='demo-simple-select-label'>Typ zadania</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='setTodoType'
                onChange={onChange}
              >
                {todoTypeList && todoTypeList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </>}
          />
          <Button variant='contained' color='primary' type='submit'>
            Send
          </Button>
        </form>
      </CardContent>
    </Card>

  )
}
