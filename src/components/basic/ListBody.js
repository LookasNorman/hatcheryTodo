import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export const ListBody = ({data}) => {
    const classes = useStyles();

    return (
        <>
            <ListItem>
                <ListItemText primary={data.title} secondary={data.date}/>
                <ListItemSecondaryAction>
                    <IconButton aria-label="comments">
                        <MoreVertIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    );
}
