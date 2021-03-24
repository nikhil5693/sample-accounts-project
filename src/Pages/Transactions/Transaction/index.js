import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '360px',
        margin: '20px',
        float: 'left',
        backgroundColor: '#d1d1d8',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    Success: {
        backgroundColor: '#8dc58d',
        padding: '4px',
        borderRadius: '4px',
    },
    Failure: {
        backgroundColor: '#ce8b8b',
        padding: '4px',
        borderRadius: '4px',
    },
    Pending: {
        backgroundColor: '#9aaee2',
        padding: '4px',
        borderRadius: '4px',
    }
});

const Transaction = ({ type, cardType, cardDetails, amount, date }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Transaction type: <span className={classes[type]}>{type}</span>
                </Typography>
                <Typography variant="h5" component="h2">
                    Card number: <strong>{cardDetails}</strong>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Card type: {cardType}
                </Typography>
                <Typography variant="body2" component="p">
                    Amount: ${amount}
                    <br />
                    Date: {date}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Transaction;