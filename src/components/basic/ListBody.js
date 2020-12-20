import React from 'react';
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const ListBody = ({data}) => {
    return (
        <ListItem>
            <ListItemText primary={data.title} secondary={data.date}/>
            <ListItemSecondaryAction>
                <IconButton aria-label="comments">
                    <MoreVertIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

    );
}
