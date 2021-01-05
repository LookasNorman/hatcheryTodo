import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";
import MenuItem from "../components/basic/MenuItem";
import {
  Devices,
  DevicesOther,
  Home,
  ListAlt,
  LocationOn,
  MeetingRoom,
  ShoppingCart,
  Style,
  ViewList,
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar}/>
      <Divider/>
      <List>
        {[
          {title: 'Strona główna', icon: <Home/>, path: '/'},
          {title: 'Zadania', icon: <ListAlt/>, path: '/zadania'},
          {title: 'Reklamacje', icon: <ViewList/>, path: '/reklamacje'},
          {title: 'Zamówienia', icon: <ShoppingCart/>, path: '/zamowienia'},
          {title: 'Typy zadań', icon: <Style/>, path: '/typy_zadan'}
        ].map((item, index) => (
          <MenuItem key={index} item={item}/>
        ))}
      </List>
      <Divider/>
      <List>
        {[
          {title: 'Lokalizacje', icon: <LocationOn/>, path: '/lokalizacje'},
          {title: 'Hale', icon: <MeetingRoom/>, path: '/hale'},
          {title: 'Grupy maszyn', icon: <DevicesOther/>, path: '/grupy_maszyn'},
          {title: 'Maszyny', icon: <Devices/>, path: '/maszyny'}
        ].map((item, index) => (
          <MenuItem key={index} item={item}/>
        ))}
      </List>
    </div>
  )
}
