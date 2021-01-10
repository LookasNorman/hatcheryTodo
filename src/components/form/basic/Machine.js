import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, CardContent, Card, InputLabel, Select, MenuItem } from '@material-ui/core'
import { CardHeader } from '../../basic/CardHeader'
import { getObjectsAddresses } from '../../../api/ObjectsAddresses'
import { getHalls } from '../../../api/Halls'
import { getMachinesGroups } from '../../../api/MachinesGroups'

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
}));

export default function Machine() {
  const classes = useStyles();
  const { handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)
  const [objectAddressList, setObjectAddressList] = useState()
  const [hallList, setHallList] = useState()
  const [machinesGroupsList, setMachinesGroupsList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const objectAddress = await getObjectsAddresses()
      if(!objectAddress.error){
        setObjectAddressList(objectAddress.data)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const halls = await getHalls()
      if(!halls.error){
        setHallList(halls.data)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const machineGroups = await getMachinesGroups()
      if(!machineGroups.error){
        setMachinesGroupsList(machineGroups.data)
      }
    }
    fetchData()
  }, [])

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={`${classes.details} ${classes.flex}`}>
          <CardHeader data="Dodaj maszynę / urządzenie" />
        </div>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <TextField
              id="standard-basic"
              label="Nazwa"
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name="serialNumber"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <TextField
              id="standard-basic"
              label="Numer seryjny"
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name="objectAddress"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <>
              <InputLabel id="demo-simple-select-label">Lokalizacja</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="objectAddress"
                onChange={onChange}
              >
                {objectAddressList && objectAddressList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </>}
          />
          <Controller
            name="hall"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <>
              <InputLabel id="demo-simple-select-label">Hala / Kurnik</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="objectAddress"
                onChange={onChange}
              >
                {hallList && hallList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </>}
          />
          <Controller
            name="machinesGroups"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <>
              <InputLabel id="demo-simple-select-label">Grupa maszyn</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="objectAddress"
                onChange={onChange}
              >
                {machinesGroupsList && machinesGroupsList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </>}
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
