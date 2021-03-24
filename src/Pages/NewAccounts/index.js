import { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { getDate } from '../../utils';

const NewAccount = (props) => {
    const { setField, type, firstName, lastName, number, balance, setData, accounts, accountType } = props;
    const [isButtonClicked, handleButtonClicked] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const fields = [
        {
            fieldName: 'Account type',
            id: 'type',
            value: type,
        },
        {
            fieldName: 'First name',
            id: 'firstName',
            value: firstName,
            validation: true,
        },
        {
            fieldName: 'Last name',
            id: 'lastName',
            value: lastName,
            validation: true,
        },
        {
            fieldName: 'Account number',
            id: 'number',
            value: number,
        },
        {
            fieldName: 'Balance',
            id: 'balance',
            value: balance,
        },
    ];
    const handleClick = () => {
        handleButtonClicked(true);
        if (fields.find(({ value }) => value === '')) {
            setHasErrors(true);
            return;
        }
        const data = {
            accounts: [
                ...accounts,
                {
                    type,
                    firstName,
                    lastName,
                    number,
                    balance,
                    accountType,
                    date: getDate(),
                    transactions: [],
                }
            ]
        };
        setData(data);

        props.history.push('./accounts');
    };

    return (<Container component="main" maxWidth="lg">
        <Typography variant="h6" gutterBottom>
            Add Account
        </Typography>
        {fields.map(({ fieldName, id, value: val, validation, hasError }) => (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id={id}
                        name={id}
                        label={fieldName}
                        fullWidth
                        value={val}
                        error={isButtonClicked && val === ''}
                        onChange={async ({ target: { value } }) => {
                            if (validation) {
                                const regex = /[^\w]|_/g;
                                if (regex.test(value)) return;
                            }
                            await setField({ name: id, value });
                        }}
                    />
                </Grid>
            </Grid>
        ))}
        {hasErrors && <Typography style={{ marginTop: '20px', color: '#f44336' }}><strong>*Please fill all the fields</strong></Typography>}
        <Button
            style={{ marginTop: '20px' }}
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => handleClick()}
        >
            Add account
        </Button>
    </Container>);
}

const mapState = ({ newAccount, accounts: { accounts } }) => ({ ...newAccount, accounts });

const mapDispatch = ({ newAccount: { setField }, accounts: { setData } }) => ({
    setField,
    setData,
})

export default connect(mapState, mapDispatch)(NewAccount);