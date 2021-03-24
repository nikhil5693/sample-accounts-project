import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import loginDetailsContext from '../../context/loginDetailsContext';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = (props) => {
    const { userName, password, handleLogin, setField } = props;
    const [showError, setError] = useState(false);
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const { setLoggedIn } = useContext(loginDetailsContext);
    const classes = useStyles();
    const onLogin = async (e) => {
        const res = await handleLogin(e);
        if (res && Object.keys(res).length > 0) {
            setLoggedIn({ isLoggedIn: true, id: res.id });
            setField({ name: 'id', value: res.id });
            props.history.push('/accounts');
        } else if (res.error) {
            setError(true);
        } else {
            setInvalidCredentials(true);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={userName}
                        id="userName"
                        label="User name"
                        name="userName"
                        onChange={({ target: { value } }) => {
                            const regex = /[^\w]|_/g;
                            if (regex.test(value)) return;
                            setField({ name: 'userName', value })
                        }}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={({ target: { value } }) => setField({ name: 'password', value })}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => onLogin(e)}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            {showError && <Typography>Something went wrong! Please try again later.</Typography>}
            {invalidCredentials && <Typography>Invalid credentials!</Typography>}
        </Container>
    );
}

const mapState = ({ login: { userName, password } }) => ({ userName, password });

const mapDispatch = ({ login: { setField, handleLogin } }) => ({
    handleLogin,
    setField,
})

export default connect(mapState, mapDispatch)(Login);