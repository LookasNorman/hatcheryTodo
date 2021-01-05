import {ListItem, ListItemText} from "@material-ui/core";
import React from "react";

export default function PartHeader({text}){
  return (
    <ListItem divider>
      <ListItemText primary={text}/>
    </ListItem>
  )
}