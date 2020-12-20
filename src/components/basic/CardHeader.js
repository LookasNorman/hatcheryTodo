import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
});

export const CardHeader = () => {
    const classes = useStyles();

    return (
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Dzisiaj
                </Typography>
    );
}
