import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
    buttoncolor: {
        backgroundColor: '#3f51b5',
        color: 'white',
    },
    status: {
        backgroundColor: '#daab86',
        padding: '4px',
        borderRadius: '4px',
    },
});

const Account = ({ type, number, date, balance, transactions, setTransactions, accountType, ...rest }) => {
    const classes = useStyles();
    let view = '';
    if (accountType) {
        const { firstName, lastName } = rest;
        view = (<>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Status: <span className={classes.status}>{accountType}</span>
            </Typography>
            <Typography variant="h5" component="h5">
                Name: <strong>{firstName} {lastName}</strong>
            </Typography>
        </>);
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                {view}
                <Typography variant="h5" component="h5">
                    Account number: <strong>{number}</strong>
                </Typography>
                <Typography variant="body2" component="p">
                    Created on: {date}
                    <br />
                    Type: {type}
                    <br />
                    Balance: ${balance}
                    <br />
                    Transactions: {transactions.length}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    className={classes.buttoncolor}
                    size="small"
                    onClick={() => setTransactions(transactions)}
                    disabled={!transactions.length}
                >
                    See transactions
                </Button>
            </CardActions>
        </Card>
    );
}

export default Account;