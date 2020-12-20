import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles({});

export default function CardSubtitle() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
        </Typography>
    );
}
