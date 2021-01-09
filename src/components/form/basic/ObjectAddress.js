import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, CardContent, Card } from '@material-ui/core'
import { CardHeader } from '../../basic/CardHeader'
import { newObjectAddress } from '../../../api/ObjectsAddresses'

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

export default function ObjectAddress() {
  const classes = useStyles();
  const { handleSubmit, control } = useForm()
  const onSubmit = async (data) => {
    console.log(JSON.stringify(data))
    const newObject = await newObjectAddress(JSON.stringify(data))
      if(newObject.error) {
        console.log(newObject.error)
      } else {
        console.log(newObject.data)
      }
  }

  return (
    <Card id="object-address-add" className={classes.card}>
      <CardContent className={classes.content}>
        <div className={`${classes.details} ${classes.flex}`}>
          <CardHeader data="Dodaj lokalizację" />
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
            name="street"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <TextField
              id="standard-basic"
              label="Ulica"
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name="streetNumber"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <TextField
              id="standard-basic"
              label="Nr domu / mieszkania"
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <TextField
              id="standard-basic"
              label="Numer telefonu"
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => <TextField
              id="standard-basic"
              label="Adres email"
              onChange={onChange} value={value}
              InputLabelProps={{
                shrink: true,
              }}
            />}
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
