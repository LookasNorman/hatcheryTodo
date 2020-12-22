import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, List} from '@material-ui/core';
import {CardHeader} from './basic/CardHeader'
import {CardSubtitle} from './basic/CardSubtitle'
import {ListBody} from './basic/ListBody'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '32%',
        minWidth: '360px',
        margin: '1vw 0',
        backgroundColor: '#eee',
        borderRadius: '0.5vw',
    },
    content: {
        flex: '1 0 auto',
    },
    title: {
        fontSize: 14,
    },
}));

export const TodoSummary = ({data}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <CardHeader data={data.title}/>
                <CardSubtitle/>
                {data.data.slice(0,3).map((item, key) => (
                    <List key={key}>
                        <ListBody data={item}/>
                    </List>

                ))}
            </CardContent>
        </Card>
    );
}
