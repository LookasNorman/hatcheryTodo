import {ListItem, ListItemText} from "@material-ui/core";
import React from "react";
import { Add } from '@material-ui/icons'

export default function PartHeader({text}){
  return (
    <ListItem divider>
      <ListItemText primary={text}/><Add/>
    </ListItem>
  )
}