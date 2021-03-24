import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginDetailsContext from '../context/loginDetailsContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { firstName, lastName, showAddAccount = false, resetAccountsData, resetLoginData, resetTransactionsData, resetNewAccountsData } = props;
  const { setLoggedIn } = useContext(loginDetailsContext);
  const handleLogout = () => {
    setLoggedIn({ id: '', isLoggedIn: false });
    resetAccountsData();
    resetLoginData();
    resetTransactionsData();
    resetNewAccountsData();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={4}>
            <Grid item xs={9}>
              Welcome <strong>{firstName} {lastName}!</strong>
            </Grid>
            <Grid item xs={2}>
              {showAddAccount &&
                <Button variant="contained" color="primary">
                  <Link to='/newAccounts'>
                    <span style={{ color: 'white' }}>Add account</span>
                  </Link>
                </Button>
              }
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="primary" onClick={() => handleLogout()}>Logout</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapState = ({ accounts: { firstName, lastName } }) => ({ firstName, lastName });
const mapDispatch = ({
  accounts: { resetAccountsData },
  login: { resetLoginData },
  transactions: { resetTransactionsData },
  newAccount: { resetNewAccountsData },
}) => ({ resetAccountsData, resetLoginData, resetTransactionsData, resetNewAccountsData });

export default connect(mapState, mapDispatch)(Header);