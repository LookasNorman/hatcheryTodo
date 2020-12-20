import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles({
    });

export default function CardBody() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Typography variant="body2" component="p">
            well meaning and kindly.
            <br/>
            {'"a benevolent smile"'}
        </Typography>
    );
}
