import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
});

export default function CardHeader() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
    );
}
