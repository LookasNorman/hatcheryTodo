import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, List} from '@material-ui/core';
import {CardHeader} from './basic/CardHeader'
import {CardSubtitle} from './basic/CardSubtitle'
import {ListBody} from './basic/ListBody'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
});

export const Today = ({data}) => {
    const classes = useStyles();
    return (
        // data.map((item, key) => (
        <Card className={classes.root}>
            <CardContent>
                <CardHeader/>
                <CardSubtitle/>
                {data.map((item, key) => (
                    <List key={key} className={classes.root}>
                        <ListBody data={item}/>
                    </List>
                ))}

            </CardContent>
        </Card>
// ))

    );
}
