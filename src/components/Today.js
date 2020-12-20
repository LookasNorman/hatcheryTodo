import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button} from '@material-ui/core';
import CardHeader from './basic/CardHeader'
import CardSubtitle from './basic/CardSubtitle'
import CardBody from './basic/CardBody'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
});

export default function Today() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardHeader/>
                <CardSubtitle/>
                <CardBody/>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
