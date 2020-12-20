import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles({
    });

export const CardBody = () => {
    const classes = useStyles();

    return (
        <Typography variant="body2" component="p">
            well meaning and kindly.
            <br/>
            {'"a benevolent smile"'}
        </Typography>
    );
}
